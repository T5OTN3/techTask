import prisma from './../../../../lib/prisma';
import nextConnect from 'next-connect';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
// Imports the Google Cloud client library
import { Storage } from '@google-cloud/storage';

const credential = JSON.parse(
    Buffer.from(process.env.GCLOUD_CREDENTIALS, 'base64').toString()
);

// Creates a client from a Google service account key
const storage = new Storage({ 
    projectId: 'secretimmo',
    credentials: credential 
});

const bucket = storage.bucket('secretimmo-static-bucket');

/* async function configureBucketCors() {
    await storage.bucket(bucketName).setCorsConfiguration([
      {
        maxAgeSeconds,
        method: ['http://localhost:3000/'],
        origin: ['GET'],
        responseHeader: ['Content-Type'],
      },
    ]);

    console.log(`Bucket ${bucketName} was updated with a CORS config
        to allow ${method} requests from ${origin} sharing 
        ${responseHeader} responses across origins`);
} */

const uploadImage = (file) => new Promise((resolve, reject) => {
    const { buffer } = file;
  
    const ext = file.originalname.split('.')[1];
    const fileName = `${uuidv4()}.${ext}`;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      resumable: false
    })
    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve({ publicUrl, fileName });
    })
    .on('error', () => {
      reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
});

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

const apiRoute = nextConnect({
  onError(error, req, res) {
      console.log(error)
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("images", 10)); // limit to 10 images
/* 
apiRoute.use((req, res, next) => {
    uploadFiles(req, res, err => {
      if (err instanceof multer.MulterError) { // A Multer error occurred when uploading.
        if (err.code === "LIMIT_UNEXPECTED_FILE") { // Too many images exceeding the allowed limit
          console.log("Error - to many images")
        }
      } else if (err) {
        // handle other errors
        console.log(err)
      }
      
      // Everything is ok.
      console.log("ok")
      next();
    });
  }); */

apiRoute.post( async (req, res) => {
    const { data } = req.body;
    const obj = JSON.parse(data);

    const imageCloud = [];

    //configureBucketCors().catch(console.error);

    await Promise.all(
        req.files.map(async file => {
            const imageUrl = await uploadImage(file);
            imageCloud.push(imageUrl);
        })
    );

    const imageArr = imageCloud.map((el, index) => {
        const type = index === obj.imageIndex ? 'primary' : 'secondary';
        const image360 = index === obj.image360Index ? true : false;
        return { imageName: el.fileName, folderName: el.publicUrl, type, image360 }
    });
      
    const newBlog = await prisma.blogs.create({
        data: {
            posts: { create: [{
                title: obj.title,
                shortText: obj.shortText,
                blogText: obj.blogText,
                metaDescription: obj.metaDescription,
                metaKeywords: obj.metaKeywords,
                language: obj.lan
            }] },
            images: { create: imageArr }
        }
    });

    res.status(200).json({ 
        status: 'success',
        //data: newBlog 
    });
});

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};

export default apiRoute;


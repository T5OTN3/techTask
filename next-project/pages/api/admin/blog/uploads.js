import prisma from './../../../../lib/prisma';
import nextConnect from 'next-connect';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/Blogs/${req.imagePath}`);
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `${uuidv4()}.${ext}`);
    },
  }),
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

apiRoute.use((req, res, next) => {
    req.imagePath = uuidv4();
    fs.mkdirSync(`./public/Blogs/${req.imagePath}`);
    next();
});

apiRoute.use(upload.array('images', 10));

apiRoute.post( async (req, res) => {
    const { data } = req.body;
    const obj = JSON.parse(data);

    const imageArr = req.files.map(el => {
        return { imageName: el.filename, folderName: req.imagePath }
    });

    const newBlog = await prisma.blogs.create({
        data: {
            lang: obj.lan,
            title: obj.title,
            shortText: obj.shortText,
            blogText: obj.blogText,
            metaDescription: obj.metaDescription,
            metaKeywords: obj.metaKeywords,
            images: { create: imageArr }
        }
    });

    res.status(200).json({ data: 'success' });
});

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};

export default apiRoute;

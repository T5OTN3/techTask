
    import prisma from './../../../../lib/prisma';
    import nextConnect from 'next-connect';
    
    
    const apiRoute = nextConnect({
      onError(error, req, res) {
          console.log(error)
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
      },
      onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
      },
    });
    
    
    apiRoute.get( async (req, res) => {
        const { searchString } = req.query

        const blogs = await prisma.blogs.findMany({
            where:{
                posts:{
                    count:{
                       gt: 2
                    } 
                }
            }
        });
    
        res.status(200).json({ 
            status: 'success', 
            length: blogs.length,
            data: blogs 
        });
    });
    
    export const config = {
        api: {
            bodyParser: false, // Disallow body parsing, consume as stream
        },
    };
    
    export default apiRoute;
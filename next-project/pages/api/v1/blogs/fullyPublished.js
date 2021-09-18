
    import prisma from './../../../../lib/prisma';
    import nextConnect from 'next-connect';
    import APIFeatures from '../../../../utils/apiFeatures';
    
    
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
        const { searchString, page: queryPage, limit: queryLimit, orderBy: queryOrderBy, orderType: queryOrderType } = req.query

        const page = queryPage * 1 || 1;
        const limit = queryLimit * 1 || 100;
        const skip = (page - 1) * limit;

        const paginate = page
          ? {
                take: Number(limit) || undefined,
                skip: Number(skip) || undefined,
            }
          : {}

        const orderByField = queryOrderBy || "blogId";
        const orderType = queryOrderType || "asc";

        const order = {
            orderBy: {
                [orderByField]: orderType || undefined,
              }
        }

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
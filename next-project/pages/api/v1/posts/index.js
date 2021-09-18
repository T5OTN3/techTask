
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
        //http://localhost:3000/api/v1/posts?page=1&orderBy=title&orderType=desc&searchString=NetDev&language=de
        const { searchString, page: queryPage, limit: queryLimit, orderBy: queryOrderBy, orderType: queryOrderType } = req.query;

        const queryObj = {...req.query};
        const excludedFields = ['searchString','page','limit','orderBy','orderType'];
        excludedFields.forEach(el => delete queryObj[el]);

        const or = searchString
        ? {
            OR: [
              { title: { contains: searchString } },
              { shortText: { contains: searchString } },
              { metaDescription: { contains: searchString } },
              { metaKeywords: { contains: searchString } },
            ],
          }
        : {}

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

        const posts = await prisma.posts.findMany({
            where:{
                ...queryObj,
                ...or
            },
            ...paginate,
            ...order
        });

        const blogs = await prisma.blogs.findMany({
            where:{
                images:{
                    some: {
                        image360: true
                    }
                }
            },
            include: {
                posts: {
                    ...paginate,
                    ...order
                },
                images: true
            },    
        });
    
        res.status(200).json({ 
            status: 'success', 
            length: posts.length,
            data: posts 
        });
    });
    
    export const config = {
        api: {
            bodyParser: false, // Disallow body parsing, consume as stream
        },
    };
    
    export default apiRoute;
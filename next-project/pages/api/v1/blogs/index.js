
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
        //http://localhost:3000/api/v1/posts?page=1&orderBy=title&orderType=desc&searchString=NetDev&language=de&fields=title,language
        const { searchString, page: queryPage, limit: queryLimit, orderBy: queryOrderBy, orderType: queryOrderType, fields: queryFields } = req.query;

        // Find with some column value
        const queryObj = {...req.query};
        const excludedFields = ['searchString','page','limit','orderBy','orderType','fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        // Filters posts by title or shortText or metaDescription or metaKeywords
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

        // Paginate logic with default page=1 and limit=100. we can change with query
        const page = queryPage * 1 || 1;
        const limit = queryLimit * 1 || 100;
        const skip = (page - 1) * limit;

        const paginate = page
          ? {
                take: Number(limit) || undefined,
                skip: Number(skip) || undefined,
            }
          : {}

        // Order logic with field and Type. we have default parameters
        const orderByField = queryOrderBy || "blogId";
        const orderType = queryOrderType || "asc";

        const order = {
            orderBy: {
                [orderByField]: orderType || undefined,
              }
        }

        // Show fields logic. default we select all fields and it depends DB schema.
        const fieldsArr = queryFields ? queryFields.split(',') : 'id,title,shortText,blogText,metaDescription,metaKeywords,language,blogId'.split(',');
        const fieldsObj = fieldsArr.reduce((acc, cur) => ({ ...acc, [cur]: true }),{});

        const blogs = await prisma.blogs.findMany({
            where:{
                posts:{
                    some: {
                        ...queryObj,
                        ...or
                    }
                }
            },
            include: {
                posts: {
                    select:{
                        ...fieldsObj
                    }
                },
                images: true
            },
            ...paginate,
            ...order    
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
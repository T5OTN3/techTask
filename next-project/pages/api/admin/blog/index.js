import prisma from './../../../../lib/prisma'


function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getBlogs();
        case 'POST':
            const { content, author } = req.body;
            return createBlog(content, author);
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function  getBlogs() {
        const blogs = await prisma.blogs.findMany({include: { images: true, lang: true }});
        return res.status(200).json({
            status: 'success',
            data: blogs
        });
    }
    
    async function createBlog(content, author) {
        try {
            const status = content.match(/<img.*>/g);
            const data = {};
            
            if(status){
                data.severity = 'error';
                data.message = 'Sorry, this editor does not support image file';
            }else{
                data.severity = 'success';
                data.message = 'Your post is created';
                const newBlog = await prisma.blogs.create({
                    data: {
                        content,
                        author
                    }
                });
            }

            return res.status(200).json({
                status: 'success',
                data
            });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}

export default handler;
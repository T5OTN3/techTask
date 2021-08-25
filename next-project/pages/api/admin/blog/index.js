import prisma from './../../../../lib/prisma'


function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getBlogs();
        case 'POST':
            const { content, user } = req.body;
            return createBlog(content, user);
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function  getBlogs() {
        const blogs = await prisma.blogs.findMany();
        return res.status(200).json({
            status: 'success',
            data: blogs
        });
    }
    
    function createBlog(content, user) {
        try {
/*             const newBlog = await prisma.blogs.create({
                data: {
                    content,
                    user
                }
              }) */
            
            return res.status(200).json({
                status: 'success',
                data: content
            });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}

export default handler;
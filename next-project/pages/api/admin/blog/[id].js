import prisma from './../../../../lib/prisma'


function handler(req, res) {
    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            return getBlogById(id);
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function  getBlogById(id) {
        const blog = await prisma.blogs.findUnique({
            where: {
                id: +id
            }
        });
        return res.status(200).json({
            status: 'success',
            data: blog
        });
    }
}

export default handler;
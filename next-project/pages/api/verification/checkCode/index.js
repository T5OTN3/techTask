import prisma from './../../../../lib/prisma'

export default async function handler(req, res){
    if (req.method === 'POST') {
        // Process a POST request
        const { phone, smsCode, id } = req.body;
        let info = ''

        const phoneStatus = await prisma.contact.count({
            where: {
                phone: phone
            }
        });

        if(phoneStatus){
            const response = await prisma.contact.findUnique({
                select:{
                    smsCode: true
                },
                where: {
                    id: +id
                }
            });
            
            response.code === +code ? info = 'valid' : info = 'invalid'
        }

        res.status(200).json({
            status: 'success',
            info
        }); 
        return
    }else{
        // Handle any other HTTP method
        res.status(400).send({ message: 'Only POST requests allowed'});
        return
    }
}
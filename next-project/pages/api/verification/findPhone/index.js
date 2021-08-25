import prisma from './../../../../lib/prisma'

export default async function handler(req, res){
    if (req.method === 'POST') {
        // Process a POST request
        const { phone } = req.body;
        const obj = {
            smsConfirmed: false,
        }

        const phoneStatus = await prisma.contact.count({
            where: {
                phone
            }
        });

        if(phoneStatus !== 0){
            const result = await prisma.contact.findFirst({
                select:{
                    smsConfirmed: true,
                    id: true
                },
                where: { 
                    phone: phone
                }
            });
            obj.smsConfirmed = result.smsConfirmed;
            obj.id = result.id;
        }

        res.status(200).json({
            status: 'success',
            data: obj
        }); 
        return
    }else{
        // Handle any other HTTP method
        res.status(400).send({ message: 'Only POST requests allowed'});
        return
    }
}
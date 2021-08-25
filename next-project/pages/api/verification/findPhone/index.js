import prisma from './../../../../lib/prisma'

export default async function handler(req, res){
    if (req.method === 'POST') {
        // Process a POST request
        const { phone } = req.body;
        let smsConfirmed = false

        console.log(phone);

        const phoneStatus = await prisma.contact.count({
            where: {
                phone
            }
        });

        console.log(phoneStatus);

        if(phoneStatus){
            smsConfirmed = await prisma.contact.findUnique({
                select:{
                    smsConfirmed: true
                },
                where: {
                    phone: phone
                }
            });
        }

        res.status(200).json({
            status: 'success',
            smsConfirmed
        }); 
        return
    }else{
        // Handle any other HTTP method
        res.status(400).send({ message: 'Only POST requests allowed'});
        return
    }
}
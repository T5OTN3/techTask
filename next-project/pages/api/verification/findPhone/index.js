import prisma from './../../../../lib/prisma'

export default async function handler(req, res){
    if (req.method === 'POST') {
        // Process a POST request
        const { phone } = req.body;
        const obj = {
            smsConfirmed: true,
        }

        const phoneStatus = await prisma.contact.count({
            where: {
                AND: {
                    phone: {
                        equals: phone,
                    },
                    smsConfirmed: {
                        equals: true,
                    }
                }
            }
        });

        if(phoneStatus === 0){
            const result = await prisma.contact.findFirst({
                select:{
                    smsConfirmed: true,
                    id: true
                },
                where: { 
                    phone: phone
                }
            });
            console.log(result);
            obj.smsConfirmed = result?.smsConfirmed || false;
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
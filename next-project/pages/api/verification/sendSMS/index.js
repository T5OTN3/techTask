import prisma from './../../../../lib/prisma'
import axios from 'axios';

export default async function handler(req, res){
    if (req.method === 'POST') {
        // Process a POST request
        const { phone, id } = req.body;

        const code = Math.random().toString().substr(2, 6);

        const smsRespone = await axios(`https://api.budgetsms.net/sendsms/?username=meta&handle=&userid=9117&msg=${code}&from=BudgetSMS&to=995${phone}`);
        
        const contactInfo = await prisma.contact.update({
            select:{ firstName: true, id: true, phone: true },
            where: { id: +id },
            data: {
                smsCode: +code,
                smsStatus: smsRespone.data
            }
        })

        const smsStatus = smsRespone?.data?.includes('OK');

        smsStatus ?
        res.status(200).json({
            status: 'success',
            message: 'Your code was succesfully sent',
            data: contactInfo
        }) 
        :
        res.status(200).json({
            status: 'success',
            message: `${phone} is not found try again`
        }); 
        return
    }else{
        // Handle any other HTTP method
        res.status(400).send({ message: 'Only GET requests allowed'});
        return
    }
}
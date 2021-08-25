import prisma from './../../../../lib/prisma'

export default async function handler(req, res){
    if (req.method === 'POST') {
        // Process a POST request
        const { firstName, lastName, email, phone, subject, message, privacy, acceptTerms } = req.body;
        
        const newContact = await prisma.contact.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email,
                phone,
                subject,
                message,
                privacy,
                acceptTerms        
            }
        })

        res.status(200).json({
            status: 'success',
            data: newContact
        });
      } else {
        // Handle any other HTTP method
        res.status(400).send({ message: 'Only POST requests allowed'});
        return
      }
}
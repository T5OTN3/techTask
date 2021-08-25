import prisma from './../../../../lib/prisma'
import jwt from 'jsonwebtoken';


export default async function handler(req, res){
    if (req.method === 'POST') {
        // Process a POST request
        const { email, password } = req.body;
        
        const user = await prisma.admin.findFirst({
            where: {
                username: email
            }
        })

        if(user && password === user?.password){
            var token = jwt.sign({ id: user?.id, email: user?.username }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            res.status(200).json({
                status: 'success',
                data: {
                    username: user.username, 
                    role: user.role,
                    token
                }
            });
            return
        }else{
            res.status(200).json({
                status: 'error',
                message: 'User not found'
            });
            return
        }


      } else {
        // Handle any other HTTP method
        res.status(400).send({ message: 'Only POST requests allowed'});
        return
      }
}
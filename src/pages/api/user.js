import bcrypt from 'bcrypt'
import db from '../../../models'



export default async function (req, res){

     
           const hash = await bcrypt.hash(req.body.password, 10);
            const user = await db.user.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
                gender: req.body.gender,
                birthday: req.body.birthday
            });
            res.end(JSON.stringify(user));
          
       
     



    
}
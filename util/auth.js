import jwt from "jsonwebtoken"

const env = process.env.NODE_ENV || 'development';

export default function Auth(req, res){
try{
    const token = req.headers.authorization.split('')[1]
    const result = jwt.verify(token, process.env.secretkey);
    req.auth = result;
}catch(e){
    console.log(e);
    res.status(401).send("You are not authorize")
}
}



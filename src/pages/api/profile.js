import Auth from '../../../util/auth'
const db = require('../../../models')
export default async function (req, res){
    if(!Auth(req, res)) return;
    
      res.send({success: true})
}

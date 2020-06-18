const db = require('../../../../models');
const User = db.user;

export default async function (req, res){
const user = await User.findOne({ where: { 
  id: req.query.id,
  
 } })
.then(function(user){
if (user === null) {
  console.log('Not found!');
} else {
  
}})
res.end(JSON.stringify({ 
  id: req.query.id, 
        
}))
}
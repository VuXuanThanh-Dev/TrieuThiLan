const jwt = require('jsonwebtoken');

const payload = {
    id: 123456789,
    name: 'unknown'
}

const secret = "trieulan12332rrefasfasfasf";

exports.payload = payload;
exports.secret = secret;

exports.checkAuthorization = (req, res, next)=>{
    let auth = req.headers['authorization'];
    let token = auth.split(' ')[1];
    let decodedToken;
    try{
     decodedToken = jwt.verify(token, secret);
    }catch(err){
        console.log(err);
    }
    console.log(decodedToken);
    if(!decodedToken){
        res.json({message: 'not permission!', errors: 'authorization', data: null});
       
    }else{
        req.token = decodedToken;
        next();
    }
    
 }
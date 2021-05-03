const db = require('../configs/db.config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { QueryTypes } = require('sequelize');
const authen = require('../configs/auth.config');


exports.login = async (req, res, next)=>{
   let username = req.body.username;
   let password = req.body.password;
   let sql = "select * from admin where `username`=?";
   let result = await db.query(sql, {
       replacements: [username],
       type: QueryTypes.SELECT
   });
   let kq = result[0];
   if(kq == null){        
       res.json({message:"admin.login.errors", errors: "username.errors", data: null})
      return;
    }
    
    let checkPassword = await bcrypt.compareSync( password, kq.password);
    let token = jwt.sign(authen.payload, authen.secret, {expiresIn: '3h'});
   
    if(checkPassword){
        res.json({message: "admin.login.success", errors: null, data: null, token: token})
    }else{
        res.json({message:"admin.login.errors", errors: "password.errors", data: null})
        return;
    }
};

exports.signup = async (req, res, next)=>{
    let username = req.body.username;
    let password = req.body.password;
    let has = '';
    let salt = bcrypt.genSaltSync(12, (err, salt)=>{
        if(err){
            console.log(err);
            return;
        }
    });
    has = bcrypt.hashSync(password, salt, (err, hash)=>{
        if(err){
            console.log(err);
            return;
        }
    });
   let token = jwt.sign(authen.payload, authen.secret,{expiresIn: '3h'})
    let sql = "insert into admin(`username`, `password`) values(:username, :password)"
    
    let result = await db.query(sql, {
        replacements: {username: username,password: has},
        type: QueryTypes.INSERT
    });
    if(!result){
        res.json({message:"admin.sign_up.errors", errors: "server.errors", data: null})
    }else{
        res.json({message: "admin.sign_up.success", errors: null, data: result[0], token: token})
    }
}
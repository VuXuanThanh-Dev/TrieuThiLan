const db = require('../configs/db.config');
const { QueryTypes } = require('sequelize');

exports.getHome = async (req, res, next)=>{
    try{
        let result = await db.query("select * from images", {
            type: QueryTypes.SELECT
        });
    
        if(!result){
            console.log(result);
        }else{
            res.json({message: "success", data: null});
        }
    }catch(err){
        console.log(err);
    }
}
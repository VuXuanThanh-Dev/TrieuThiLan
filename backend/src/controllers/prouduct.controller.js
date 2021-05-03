const { QueryTypes } = require('sequelize');
const db = require('../configs/db.config');
const product = require('../models/product.model');

exports.getProduct = async (req, res, next)=>{
    try{
        let result = await product.findAll({
            where: {
                status: req.body.status
            }
        });
        if(!result){
          res.json({message: "admin.search_product.failed!", errors: 'server.errors', data: null});
        }else{
          res.json({message: "admin.search_product.success", errors: null, data: result[0]})
        }
    }catch(err){
        console.log(err);
    }
   
};

exports.insertProduct = async (req, res, next)=>{
    try{
        let videoUse = req.body.videoUse;
        let use = req.body.use;
        let benifit = req.body.benifit;
        let sickId = req.body.sickId;
    
        let sql = "insert into products(`videoUse`, `use`, `benifit`, `sickId`) values(?, ?, ?, ?)";
        let result = await db.query(sql, {
            type: QueryTypes.INSERT,
            replacements: [videoUse, use, benifit, sickId]
        });
        console.log(result);
        if(!result){
            res.json({message: "admin.insert_product.error!", errors: "server.errors", data: null});
        }else{
            res.json({message: "admin.insert_product.success", errors: null, data: {id: result[0]}})
        }
    }catch(err){
      console.log(err);
    }
   
};

exports.deleteProduct = async (req, res, next)=>{
    try{
        let id = req.body.id;
        let sql = "update products set status = 0 where id=?";
        let result = await db.query(sql, {
            type: QueryTypes.UPDATE,
            replacements: [id]
        });
    
        if(!result.data[0]){
            res.json({message: "admin.delete_product.error", errors: "server.errors", data: null})
        }else{
            res.json({message: "admin.delete_product.success", errors: null, data: result})
        }
    }catch(err){
        console.log(err);
        res.json({message: "admin.delete_product.error", errors: "server.errors", data: null})

    }
    
};

exports.updateProduct = async (req, res, next)=>{
   try{
    let sql = "update products set `videoUse`=:videoUse, `use`=:use, `status`=:status, `benifit`=:benifit, `sickId`=:sickId where `id`=:id";
    let result = await db.query(sql, {
        replacements: req.body,
        type: QueryTypes.UPDATE
    });
    if(!result){
        // res.json({message: "admin.update_product.error", errors: "server.errors", data: null})
    }else{
        res.json({message: "admin.update_product.success", errors: null, data: result})
    }
   }catch(err){
    res.json({message: "admin.update_product.error", errors: "server.errors", data: null})
     
   }
}
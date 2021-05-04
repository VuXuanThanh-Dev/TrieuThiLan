const db = require('../configs/db.config');
const { DataTypes } = require('sequelize');

const admin = db.define('admin', {
   id: {
       primaryKey: true,
       autoIncrement: true,
       type: DataTypes.INTEGER,
       allowNull: false
   },
   username: {
       type: DataTypes.STRING
   },
   password: {
       type: DataTypes.STRING
   }
}, {
    timestamps: false
});

module.exports = admin;
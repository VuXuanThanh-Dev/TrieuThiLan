const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const introduce = db.define('introduce', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});


module.exports = introduce;
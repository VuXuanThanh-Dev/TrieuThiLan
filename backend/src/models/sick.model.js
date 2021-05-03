const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const sick = db.define('sick', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    timestamps: false
});

module.exports = sick;
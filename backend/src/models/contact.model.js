const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const contact = db.define('contact',{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    question: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

module.exports = contact;
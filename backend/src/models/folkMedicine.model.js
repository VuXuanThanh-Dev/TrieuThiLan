const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const Folk_medicine = db.define('Folk_Medicine', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    videoUrl: {
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Folk_medicine;
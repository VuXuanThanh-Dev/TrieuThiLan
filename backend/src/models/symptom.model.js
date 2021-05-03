const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const symptom = db.define('symptom', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    }, 
    description: {
        type: DataTypes.STRING
    }
},
{
    timestamps: false
});

module.exports = symptom;
const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const symptom_sick = db.define('symptom_sick', {
    
    symptomId: {
        type: DataTypes.INTEGER
    },
    sickId: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
});

module.exports = symptom_sick;
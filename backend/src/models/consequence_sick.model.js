const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const consequence_sick = db.define('consequence_sick', {
   
    consequenceId : {
        type: DataTypes.INTEGER
    },
    sickId: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
});

module.exports = consequence_sick;
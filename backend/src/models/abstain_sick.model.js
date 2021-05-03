const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');


const abstain_sick = db.define('abstain_sick',{
    
    abstainId: {
        type: DataTypes.INTEGER
    },
    sickId: {
        type: DataTypes.INTEGER
    }
},
{
    timestamps: false
});

module.exports = abstain_sick
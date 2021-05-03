const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const abstain = db.define('abstain', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

module.exports = abstain;
const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const consequence = db.define('consequence', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = consequence;
const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const image = db.define('image', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    imageUrl: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = image;
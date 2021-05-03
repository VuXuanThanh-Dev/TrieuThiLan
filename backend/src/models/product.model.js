const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

const product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    videoUse: {
        type: DataTypes.STRING,
        allowNull: true
    },
    use: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 1
    },
    benifit: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});
module.exports = product;
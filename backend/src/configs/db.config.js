const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_trieuthilan', 'root', 'thanh123!@#',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
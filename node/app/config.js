const { Sequelize } = require('sequelize');

const config = {
    username: 'root',
    password: 'cisco',
    database: 'compagniaaerea',
    host: 'mysql', //host indica il nome del servizio del container 
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: 'mysql',
    dialect: config.dialect    
});
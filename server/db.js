const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    'store', //Название БД
    'postgres', // Пользователь
    'postgres', // Пароль
    {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432'
    }
)
const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('./dbConfig');

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.USER_NAME, dbConfig.USER_PASSWORD, {
        host: dbConfig.HOST_NAME,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Connected to database ', dbConfig.DB_NAME)
})
.catch((err) => {
    console.log('Error connecting to database ', err)
})

module.exports = sequelize;


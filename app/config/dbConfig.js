
const dbConfig = {
    HOST_NAME: '127.0.0.1',
    USER_NAME: "root",
    USER_PASSWORD: "khanuwa123#",
    DB_NAME: "soilcare_dev",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = dbConfig;
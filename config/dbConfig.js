module.exports = {
    HOST:'vh_db',
    USER:'root',
    PASSWORD:'123456',
    DB:'my-app',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
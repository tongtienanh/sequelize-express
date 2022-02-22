const dbConfig = require('../config/dbConfig')

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch(err=>console.log(err))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.product = require("./productModel.js")(sequelize, Sequelize.DataTypes);
db.review = require("./productModel.js")(sequelize, Sequelize.DataTypes);
db.user = require("./usersModel.js")(sequelize, Sequelize.DataTypes);

//db.sequelize.sync({force:false})

module.exports = db     
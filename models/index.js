const dbConfig = require('../config/dbConfig')

const {Sequelize,DataType} = require('sequelize')

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

db.product = require('./productModel.js')
db.review = require('./reviewModel.js')

//db.sequelize.sync({force:false})

module.exports = db     
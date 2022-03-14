const dbConfig = require('../config/dbConfig')
// const db = require('../models')
// const User = db.user
const bcrypt = require('bcrypt')
const saltRound = 10

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
db.user = require("./usersModel.js")(sequelize, Sequelize.DataTypes);
db.song = require("./songModel")(sequelize, Sequelize.DataTypes);
// db.sequelize.sync({force:false}).then(async()=>{
//     for(let i = 0;i<= 50;i++){
//         const user = {
//             userName:`user${i}`,
//             password: await bcrypt.hash(`12345${i}`,saltRound)
//         }   
//         db.user.create(user)
//     }
// })

module.exports = db     
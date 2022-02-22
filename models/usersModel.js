// const db = require('../config/dbConfig')
module.exports = (sequelize,DataType) =>{
    const User = sequelize.define('user',{
        userName:{
            type:DataType.STRING,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        password:{
            type:DataType.STRING,
            allowNull:false
        },
    },{
        timestamps: false
      })
    // db.sync()
    return User
}
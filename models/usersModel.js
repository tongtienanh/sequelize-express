// const db = require('../config/dbConfig')
module.exports = (sequelize,DataType) =>{
    const User = sequelize.define('user',{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName:{
            type:DataType.STRING,
            allowNull:false
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
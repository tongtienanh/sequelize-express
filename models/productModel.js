// const db = require('../config/dbConfig')
module.exports = (sequelize,DataType) =>{
    const Product = sequelize.define('product',{
        title:{
            type:DataType.STRING,
            allowNull:false
        },
        price:{
            type:DataType.INTEGER
        },
        description:{
            type:DataType.TEXT
        },
        published:{
            type:DataType.BOOLEAN
        }
    })
    // db.sync()
    return Product
}
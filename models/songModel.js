// const db = require('../config/dbConfig')
module.exports = (sequelize,DataType) =>{
    const Song = sequelize.define('songs',{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type:DataType.STRING,
            allowNull:false
        },
        song_url:{
            type:DataType.STRING,
            allowNull:false
        },
        song_type:{
            type:DataType.INTEGER,
            allowNull:false
        },
        create_by:{
            type:DataType.INTEGER,
            allowNull:false
        },
        cover_image:{
            type:DataType.STRING,
            allowNull:true
        },
        author_id:{
            type:DataType.STRING,
            allowNull:false
        },
        lyric:{
            type:DataType.STRING,
            allowNull:true
        },
    },{
        timestamps: false
      })
    // db.sync()
    return Song
}
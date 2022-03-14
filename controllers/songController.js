
const db = require('../models')
const Song = db.song
const uploadSingleFile = async(req, res) => {
   const link_song =`/uploads/image/${req.file.filename}`;
    const {title,song_type,create_by,cover_image,song_url,author_id,lyric} = req.body
    try{
        let newSong = await Song.create({
            title,
            song_url:link_song,
            song_type,
            create_by,
            cover_image,
            author_id,
            lyric
        })
        newSong.song_url = process.env.DOMAIN + newSong.song_url
        res.status(200).json({new_song:newSong})
    }
    catch(err){
        console.log(err.message)
    }

};
const uploadMultipleFiles = async(req, res) => {
  res.json(req.files);
};
module.exports = {
    uploadSingleFile,
    uploadMultipleFiles,
  };

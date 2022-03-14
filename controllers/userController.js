const db = require('../models')

const User = db.user

const getUsers = async(req,res) => {
    const {page,size} = req.query   
    try{
        const users = await User.findAndCountAll({
           limit:+size,
           offset:+page * size
        })
       res.status(200).json({user:users})
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {
    getUsers,
}
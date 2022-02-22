const dotenv = require('dotenv')
const db = require('../models')
const User = db.user
dotenv.config()
const jwt = require('jsonwebtoken')
const checkLogin = async(req,res)=>{
    const allUser = await User.findAll({ raw: true })
    console.log(allUser)
    const body = req.body
    const accessToken = jwt.sign(body,'hello', {
        expiresIn: 30
    })
    const refreshToken = jwt.sign(body,'hellorefresh', {
        expiresIn: 30 * 24 * 60 * 60
    })
    res.send(allUser)
    res.json({accessToken, refreshToken})
}
const register = async(req,res)=>{
    let user = {
        userName: req.body.userName,
        password:req.body.password
    }
    console.log(user,'user')
    try{
        const newUser = await User.create(user)
        res.status(200).json(newUser)
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {
    checkLogin,
    register
}
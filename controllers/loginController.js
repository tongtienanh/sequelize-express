const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const db = require('../models')
const User = db.user
const saltRound = 10
dotenv.config()
const jwt = require('jsonwebtoken')
const checkLogin = async(req,res)=>{
   try{
       const user = await User.findOne({where:{userName:req.body.userName},raw:true})
       if(!user){
           res.status(200).json({
               message:'tai khoan chua dung',
               success:false
           })
       }
       const validPassword = await bcrypt.compare(req.body.password,user.password)
       if (!validPassword){
           res.status(200).json({
               message:'mat khau chua dung',
               success:false
           })
       }
       const body = req.body;
       console.log("User: ", user);
       const accessToken = jwt.sign({userId:user.id},process.env.ACCESS_TOKEN_SECRET, {
           expiresIn: 24 * 60 * 60
       })
       const refreshToken = jwt.sign(body,process.env.ACCESS_TOKEN_REFRESH_SECRET, {
           expiresIn: 30 * 24 * 60 * 60
       })
       res.status(200).json({
           accessToken:accessToken,
           refreshToken:refreshToken,
           message:'dang nhap thanh cong',
           success:true
       })
   }
   catch (err){
       res.status(500).json({
           message:err.message,
       })
   }
}
const register = async(req,res)=>{
   try{
       let user = {
           userName: req.body.userName,
           password: await bcrypt.hash(req.body.password,saltRound)
       }
       console.log(user,'user')
       let checkUser = await User.findOne({where:{userName:user.userName}})
       if (checkUser){
           res.status(401).json('tai khoan da ton tai')
       }
       try{
           const newUser = await User.create(user)
           res.status(200).json({newUser})
       }
       catch(err){
           res.status(500).json(err.message)
       }
   }
   catch (err){
       res.status(500).json(err.message)
   }
}
module.exports = {
    checkLogin,
    register
}
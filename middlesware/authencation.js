const jwt = require('jsonwebtoken')

const authencation = async(req,res,next)=>{
    try{
        const authorizationHeader = req.headers['authorization']
        console.log(authorizationHeader,'authorizationHeader')
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token,'hello')
        next()
    }
    catch(err){
        console.log(err)
        res.status(401).json({ message:'unauthorized' })
    }
   
}

module.exports ={
    authencation
}
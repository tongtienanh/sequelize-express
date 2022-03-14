const jwt = require('jsonwebtoken');
const db = require('../models')

const authencation = async (req, res, next) => {
    try{
        const authorizationHeader = req.headers['authorization']
        console.log(authorizationHeader,'authorizationHeader')
        const token = authorizationHeader.split(' ')[1]
        const decode = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const userId = decode.userId;

        // Lay thong tin user
        const user = await db.user.findByPk(userId, { raw: true, attributes: ["id", "userName"] });
        req.user = user;
        console.log(decode,'decode', user);
        next();
    }
    catch(err){
        console.log(err)
        res.status(401).json({ message:'unauthorized' })
    }
   
}

module.exports ={
    authencation
}
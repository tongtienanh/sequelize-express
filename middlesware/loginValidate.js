const Joi = require('joi');
const loginValidate = async(req,res,next)=>{
    const schema = Joi.object({
        userName: Joi.string()
            .alphanum()
            .min(3)
            .required(),
        password:Joi.string()
            .required()
    });
    const response = schema.validate({ userName: req.body.userName, password: req.body.password }, { abortEarly: false });
    if (response.error){
        return res.status(422).json({message:response.error.message})
    }

    req.body = response.value
    next()
}

module.exports = loginValidate
const loginController = require('../controllers/loginController')
const authencationMiddlesware = require('../middlesware/authencation')
const loginValidate = require('../middlesware/loginValidate')
const router = require('express').Router()
router.get('/home',authencationMiddlesware.authencation,(req,res)=>{
    res.json(req.user);
})
router.post('/login',loginValidate,loginController.checkLogin)
router.post('/register',loginController.register)
// router.get('/get-all-product',productController.getAllProduct)
// router.get('/:id',productController.getOneProduct)
// router.put('/:id',productController.updateProduct)
// router.delete('/:id',productController.deleteProduct)
// router.get('/home',(res,req)=>{
//     res.setEncoding('xin chao')
// })
module.exports = router;
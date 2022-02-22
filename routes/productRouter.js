const productController = require('../controllers/productController')

const router = require('express').Router()

router.post('/add-product',productController.addProduct)
router.get('/get-all-product',productController.getAllProduct)
router.get('/:id',productController.getOneProduct)
router.put('/:id',productController.updateProduct)
router.delete('/:id',productController.deleteProduct)
router.get('/home',(res,req)=>{
    res.setEncoding('xin chao')
})
module.exports = router;
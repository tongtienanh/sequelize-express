const db = require('../models')

const Product = db.product
const Review = db.review


//create product


const addProduct = async(req,res) => {
    console.log(req.body.title,'title')

    let info = {
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published : false
    }
    try{
        const product = await Product.create(info)
        res.status(200).json(product)

    }
    catch(err){
        console.log(err,'loi roi')
    }
}

// get all product

const getAllProduct = async(req,res)=>{
    console.log(Product,'Product aaaaa')
    try{
        const products = await Product.findAll()
        console.log(products,'products');
        res.status(200).json(products)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
    
}

// get a product


const getOneProduct = async(req,res)=>{
    let id = req.params.id
    const product = await Product.findOne({where:{id:id}})
    res.status(200).send(product)
}



//update product

const updateProduct = async(req,res)=>{
    let id = req.params.id
    const product = await Product.update(req.body,{where:{id:id}})
    res.status(200).send(product)
}

const deleteProduct = async(req,res)=>{
    let id = req.params.id
    try{
        const product = await Product.destroy({
            where:{
                id:id
            }
        })
        res.send('xoa thanh cong')
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct
}
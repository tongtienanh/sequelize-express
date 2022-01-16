const db = require('../models')

const Product = db.product
const Review = db.review


//create product


const addProduct = async(res,req) => {
    let info = {
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published : false
    }
    try{
        const product = await Product.create(info)
    res.status(200).send(product)

    }
    catch(err){
        console.log(err,'loi roi')
    }
}

// get all product

const getAllProduct = async(res,req)=>{
    const products = await Product.findAll({})
    res.status(200).send(products)
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


module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct
}
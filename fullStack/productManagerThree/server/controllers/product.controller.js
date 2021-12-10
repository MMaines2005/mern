const Product = require('../models/product.model');

// create a new product in the database
const addNewProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch((err) => res.json(err));
}

const getAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch((err) => res.json(err));
}

const getProductById = (req, res) => {
    Product.findById({_id: req.params._id})
    .then(oneProduct => res.json(oneProduct))
    .catch((err) => res.json(err));
}

const deleteProductById = (req, res) => {
    Product.findByIdAndDelete({_id: req.params._id})
    .then(deletedProduct => res.json(deletedProduct))
    .catch((err) => res.json(err));
}

const updateProductById = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params._id}, req.body, 
        {
        new: true,
        runValidators: true
    }) 
    .then(updatedProduct => res.json(updatedProduct))
    .catch((err) => res.json(err));
}  

module.exports = {
    addNewProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById,
}
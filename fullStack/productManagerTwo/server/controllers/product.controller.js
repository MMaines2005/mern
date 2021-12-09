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

module.exports = {
    addNewProduct,
    getAllProducts,
    getProductById,
}
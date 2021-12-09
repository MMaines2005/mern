const Product = require('../models/product.model');

// create a new product in the database
const addNewProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
}
// module.exports.create = (request, response) => {
//     const { title, price, description } = request.body;
//     Product.create({
//         title,
//         price,
//         description
//     })
//     .then(product => response.json(product))
//     .catch(error => response.json(error));
// }
module.exports = {
    addNewProduct,
}
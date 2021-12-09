// entry point for ProductController
const ProductController = require('../controllers/product.controller');

// Route entry for ProductController.create
module.exports = (app) =>{
    app.post('/api', ProductController.addNewProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:_id', ProductController.getProductById);
}


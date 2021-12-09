// entry point for ProductController
const ProductController = require('../controllers/product.controller');

// Route entry for ProductController.create
module.exports = (app) =>{
    // app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.addNewProduct);
}


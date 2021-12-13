const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
    // app.get('/api', AuthorController.index); //route to first page
    app.post('/api/author', AuthorController.createAuthor); // path to make a new author
}
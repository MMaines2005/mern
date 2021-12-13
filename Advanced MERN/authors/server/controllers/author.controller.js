
const Author = require('../models/author.model');

createAuthor = (req, res) => {
    const {firstName, lastName} = req.body;
    Author.create({
        firstName,
        lastName
    })
    .then(author => res.json(author))
    .catch(err => console.log(err));
}


// add exports as you make then here
module.exports = {
    createAuthor,
}
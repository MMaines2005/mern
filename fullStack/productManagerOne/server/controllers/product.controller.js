module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.create = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(error => response.json(error));
}
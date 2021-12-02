const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to server'))
    .catch(err => console.log('Something went wrong when connecting', err));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Somethign went wrong', err));
const mongoose = require('mongoose');

const database = 'author';

mongoose
.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Connected to ${database} database`))
.catch(err => console.log(err));
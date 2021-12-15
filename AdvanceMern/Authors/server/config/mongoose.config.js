const mongoose = require('mongoose');

const dbName = 'authors';

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Connect to ${dbName} database`))
.catch(err => console.log(err));
const mongoose = require('mongoose');

const dbName = 'shopping_list';
let mongoURI = process.env.PROD_MONGODB || process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${dbName}`

mongoose
    .connect(mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log(`MongoDB connected: ${dbName}.`);
    })
    .catch(e => {
        console.error('Connection Error', e.message);
    })

    const db = mongoose.connection;

    module.exports = db;
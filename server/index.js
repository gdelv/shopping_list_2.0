const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./db/index');

const app = express();
app.use(logger('dev'));
app.use(cors(['localhost']));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
    console.log(`Giusseppe's Express server listening on port ${PORT}`);
});


const express = require('express');
const app = express();

import data from './src/constants/catalogData'

app.get('/api/products', function (req, res) {
    res.status(200).send(data);
});

app.listen(3000);
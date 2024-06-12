const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Models
const Product = require('./models/product');

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Mongo Connection Open!');
    })
    .catch((err) => {
        console.log('Oh No Error!');
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => console.log('ShopApp server started on port http://localhost:3000'));
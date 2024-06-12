const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

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
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    const {category} = req.query
    if(category){
        const products = await Product.find({category})
        res.render('products/index', {products})
    }
    const products = await Product.find({})
    res.render('products/index', {products})
})


app.post('/products', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.redirect('/products/' + product._id)
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('products/editdb', {product})
}
)

app.get('/products/add', (req, res) => {
    res.render('products/create');
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true})
    res.redirect('/products/'+ product._id)
})

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => console.log('ShopApp server started on port http://localhost:3000'));
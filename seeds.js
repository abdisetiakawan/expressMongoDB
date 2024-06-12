const mongoose = require('mongoose');
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


const product = [
	{
		"name": "Kemeja Flanel",
		"brand": "Hollister",
		"price": 750000,
		"color": "biru muda",
		"category": "Pakaian"
	},
	{
		"name": "Celana Chino",
		"brand": "Levi's",
		"price": 900000,
		"color": "krem",
		"category": "Pakaian"
	},
	{
		"name": "Sweater",
		"brand": "Gap",
		"price": 650000,
		"color": "merah muda",
		"category": "Pakaian"
	},
	{
		"name": "Sepatu Sneakers",
		"brand": "Nike",
		"price": 1200000,
		"color": "putih",
		"category": "Sepatu"
	},
	{
		"name": "Tas Ransel",
		"brand": "Herschel",
		"price": 1500000,
		"color": "biru",
		"category": "Aksesoris"
	},
	{
		"name": "Kacamata Aviator",
		"brand": "Ray-Ban",
		"price": 2000000,
		"color": "emas",
		"category": "Aksesoris"
	},
	{
		"name": "Baju Renang",
		"brand": "Speedo",
		"price": 500000,
		"color": "biru tua",
		"category": "Pakaian"
	},
	{
		"name": "Topi Baseball",
		"brand": "New Era",
		"price": 350000,
		"color": "hitam",
		"category": "Aksesoris"
	},
	{
		"name": "Rompi",
		"brand": "Zara",
		"price": 850000,
		"color": "abu-abu",
		"category": "Pakaian"
	},
	{
		"name": "Jas",
		"brand": "Hugo Boss",
		"price": 4500000,
		"color": "hitam",
		"category": "Pakaian"
	},
	{
		"name": "Sepatu Loafers",
		"brand": "Gucci",
		"price": 8000000,
		"color": "coklat",
		"category": "Sepatu"
	}
]

Product.insertMany(product)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
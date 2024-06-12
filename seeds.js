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
		"size": "M",
	},
	{
		"name": "Celana Chino",
		"brand": "Levi's",
		"price": 900000,
		"color": "krem",
		"size": "M"
	},
	{
		"name": "Sweater",
		"brand": "Gap",
		"price": 650000,
		"color": "merah muda",
		"size": "XL"
	},
	{
		"name": "Sepatu Sneakers",
		"brand": "Nike",
		"price": 1200000,
		"color": "putih",
		"size": "L"
	},
	{
		"name": "Tas Ransel",
		"brand": "Herschel",
		"price": 1500000,
		"color": "biru",
		"size": "S"
	},
	{
		"name": "Kacamata Aviator",
		"brand": "Ray-Ban",
		"price": 2000000,
		"color": "emas",
		"size": "S"
	},
	{
		"name": "Baju Renang",
		"brand": "Speedo",
		"price": 500000,
		"color": "biru tua",
		"size": "XL"
	},
	{
		"name": "Topi Baseball",
		"brand": "New Era",
		"price": 350000,
		"color": "hitam",
		"size": "XL"
	},
	{
		"name": "Rompi",
		"brand": "Zara",
		"price": 850000,
		"color": "abu-abu",
		"size": "XL"
	},
	{
		"name": "Jas",
		"brand": "Hugo Boss",
		"price": 4500000,
		"color": "hitam",
		"size": "L"
	},
	{
		"name": "Sepatu Loafers",
		"brand": "Gucci",
		"price": 8000000,
		"color": "coklat",
		"size": "M",
	}
]

Product.insertMany(product)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

let products = [
	{
		'name': 'Timberland',
		'price': 74.99,
		'quantity': 0
	},
	{
		'name': 'Kensie',
		'price': 59.99,
		'quantity': 0
	},
	{
		'name': 'Sporto',
		'price': 69.99,
		'quantity': 0
	}
];


app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
	resp.render('shop', {
		products: products
	});
});

app.get('/product', (req, resp) => {
	resp.render('product', findProduct(req.query.name));
});

app.post('/addToCart', urlencodedParser, (req, resp) => {
	let prod = findProduct(req.body.name);
	prod.quantity++;
	resp.redirect(303, '/shoppingcart');
});

app.get('/shoppingcart', (req, resp) => {
	let carts = products.filter(e => e.quantity > 0);
	resp.render('shoppingcart', {carts:carts});
});

function findProduct(name) {
	return products.find(e => e.name === name);
}

app.listen(3000);

const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'qawsedrf'
}));

const products = [
	{
		'name': 'Timberland',
		'price': 74.99,
	},
	{
		'name': 'Kensie',
		'price': 59.99,
	},
	{
		'name': 'Sporto',
		'price': 69.99,
	}
];



app.set('view engine', 'ejs');

app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.get('/', (req, resp) => {
	resp.render('shop', {
		products: products
	});
});

app.get('/product', (req, resp) => {
	let data = findProduct(req.query.name);
	console.log(req.session);
	data.itemCount = countItem(req.session.cart || []);
	resp.render('product', findProduct(req.query.name));
});

app.post('/addToCart', urlencodedParser, (req, resp) => {
	
	// deep clone products. Granted not scallable, but suffice for the limited number of products provided here
	let cart = req.session.cart || products.map(p => {return {...p}});
	let item = findProductFromCart(cart, req.body.name);

	item['quantity'] = (item['quantity'] || 0) + 1

	let itemCount = countItem(cart);

	req.session['cart'] = cart;
	resp.send(200, itemCount);
});

app.get('/shoppingcart', (req, resp) => {
	let cart = req.session.cart || [];
	cart = cart.filter(e => e.quantity > 0);
	resp.render('shoppingcart', {cart:cart});
});

function findProduct(name) {
	return products.find(e => e.name === name);
}

function findProductFromCart(cart, name) {
	return cart.find(e => e.name === name);
}

function countItem(cart) {
	return cart.filter(e => e.quantity !== undefined)
               .map(e => e.quantity)
               .reduce((a, b) => a+b, 0);
}

app.listen(3000);

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const urlencodedParser = express.urlencoded({ extended: false });

app.get('/', (req, resp) => {
	resp.render('input');
});

app.post('/result', urlencodedParser, (req, resp) => {
	let name = !(req.body.name) ? 'person' : req.body.name;
	let age = isNaN(req.body.age) ? 'unknown' : req.body.age;
	resp.render('result', {
		name: name,
		age: age
	});
});

app.listen(3000);


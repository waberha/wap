const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(session({
    resave: false,
    saveUninitialized: false,
	secret: 'qawsedrf'
}))

app.use('/style', express.static(path.join(__dirname, 'style')));

const urlencodedParser = express.urlencoded({ extended: false });

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Query</title>
	<link rel="stylesheet" href="/style/day.css"
</head>
<body>
	<form method="POST" action="/result">
		<label>Name <input type="text" name="name"></label>
		<label>Age <input type="text" name="age"></label>
		<input type="submit" name="submit" value="Submit Query">
	</form>
</body>
</html>`;

app.get('/', (req, resp) => {
	let isNight = (new Date()).getHours() > 18;
	resp.send(isNight ? html.replace('day.css', 'night.css') : html);
});

app.get('/output', (req, resp) => {
    
	let name = req.session['name'] || 'person';
	let age = req.session['age'] || 'unknown';

	resp.send(`Welcome ${name}. Your age is ${age}`);
});

app.post('/result', urlencodedParser, (req, resp) => {
    req.session['name'] = req.body.name;
    req.session['age'] = req.body.age;
	resp.redirect(303, '/output');
});

app.listen(3000);

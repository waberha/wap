const express = require('express');
const path = require('path');
const app = express();

app.use('/css', express.static(path.join(__dirname, 'css')));

const urlencodedParser = express.urlencoded({ extended: false });

let html = '<!DOCTYPE html>'
    + '<html lang="en">'
    + '<head>'
    + '<meta charset="UTF-8">'
    + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    + '<title>Query</title>'
    + '<link rel="stylesheet" href="/css/day.css" type"text/css">'
    + '</head>'
    + '<body>'
    + '<form method="POST" action="/result">'
    + '<label>Name <input type="text" name="name"></label>'
    + '<label>Age <input type="text" name="age"></label>'
    + '<input type="submit" name="submit" value="Submit Query">'
    + '</form>'
    + '</body>'
    + '</html>';

app.get('/', (req, resp) => {
	let isNight = (new Date()).getHours() > 18;
	resp.send(isNight ? html.replace('day.css', 'night.css') : html);
});

app.get('/output', (req, resp) => {
	let name = req.query.name;
	let age = req.query.age;
	if (!name) {
		name = 'person';
	}
	if (isNaN(age)) {
		age = 'unknown';
	}
	resp.send(`Welcome ${name}. Your age is ${age}`);
});

app.post('/result', urlencodedParser, (req, resp) => {
	resp.redirect(303, `/output?name=${req.body.name}&age=${req.body.age}`);
});

app.listen(3000);

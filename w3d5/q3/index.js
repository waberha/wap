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

let respHtml = '<!DOCTYPE html>'
    + '<html lang="en">'
    + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>Query</title>'
    + '<link rel="stylesheet" href="/css/day.css">'
    + '</head>'
	+ '<body>'
	+ '{body}'
    + '</body>'
    + '</html>';

app.get('/', (req, resp) => {
	let isNight = (new Date()).getHours() > 18;
	resp.send(isNight ? html.replace('day.css', 'night.css') : html);
});

app.post('/result', urlencodedParser, (req, resp) => {

	let isNight = (new Date()).getHours() > 18;
	let name = !(req.body.name) ? 'person' : req.body.name;
	let age = isNaN(req.body.age) ? 'unknown' : req.body.age;
	let message = `Welcome ${name}. Your age is ${age}`;
	let response = respHtml.replace('{body}', message);
	
	resp.send(isNight ? response.replace('day.css', 'night.css') : response);
});

app.listen(3000);

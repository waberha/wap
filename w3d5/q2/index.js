const express = require('express');
const app = express();

const form = '<body>'
    + '<form method="POST" action="/result">'
    + '<label>Name <input type="text" name="name"></label>'
    + '<label>Age <input type="text" name="age"></label>'
    + '<input type="submit" name="submit" value="Submit Query">'
    + '</form>';

const urlencodedParser = express.urlencoded({ extended: false });

app.get('/', (req, resp) => {
	resp.send(form);
});

app.post('/result', urlencodedParser, (req, resp) => {
	let name = !(req.body.name) ? 'person' : req.body.name;
	let age = isNaN(req.body.age) ? 'unknown' : req.body.age;
	resp.send(`Welcome ${name}. Your age is ${age}`);
});

app.listen(3000);

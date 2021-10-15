const express = require('express');
const app = express();

app.get('/', (req, resp) => {
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

app.listen(3000);

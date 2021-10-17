const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use('/style', express.static(path.join(__dirname, 'style')));

app.get('/', (req, resp) => {
	const date = new Date();
	resp.render('index', {
		time: date.toTimeString(),
		css: date.getHours() > 18 ? '/style/night.css' : '/style/day.css'
	});
});

app.listen(3000);

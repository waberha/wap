const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use('/style', express.static(path.join(__dirname, 'views', 'style')));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

list = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get('/', (req, resp) => {
	resp.render('game');
});

app.get('/answer', (req, resp) => {
	resp.send(list[getRand(list.length)]);
});

function getRand(max) {
	return Math.floor(Math.random() * max);
}

app.listen(3000);

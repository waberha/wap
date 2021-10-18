const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const urlencodedParser = express.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use(cookieParser());

app.get('/', (req, resp) => {
	
	let ck = !(req.cookies) ? {} : req.cookies;
	resp.render('cookies', {'cookies': ck});
});


app.post('/', urlencodedParser, (req, resp) => {
	resp.cookie(req.body.key, req.body.value);
	resp.redirect(303, '/');
});

app.listen(3000);

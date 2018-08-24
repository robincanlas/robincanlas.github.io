var express = require('express'),
	app = express(),
	path = require('path'),
	port = 6969;


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index', {title: 'HTML5-CANVAS'});
});

app.listen(port, () => {
	console.log(`LISTENING TO PORT ${port}`)
});
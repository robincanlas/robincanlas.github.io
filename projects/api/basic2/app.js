const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 2000;
app.use(bodyParser());

// app.set('views', 'views');
// app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index', { title: 'Basic Server2'})
});

app.listen(port, () => {
	console.log('listening to port '+port);		
});

app.post('/api', function(req, res){
	console.log(req.body);
	console.log(
		`
		####### ##         ##       #####  ##   ##
		##      ##        ####     ##      ##   ##
		#####   ##       ##  ##     ####   #######  `+"RUUUUUUUUNNNNNN"+`
		##      ##      ########       ##  ##   ##
		##      ###### ##      ##  #####   ##   ##
		`
	);
	res.send(req.body)
});
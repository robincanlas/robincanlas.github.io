const express = require('express');
const Request = require('request');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 1000;
app.use(bodyParser());
// app.set('views', 'views');
// app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index', { title: 'Basic Server1'})
});

app.listen(port, () => {
	console.log('listening to port '+port);		
});

exports.requestApi = function(){
	var obj = {
		param: 'AALIS NA BA'
	};

	var options = {
		url: 'http://192.168.250.135:6000/myreceiver',
		method: 'POST',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		strictSSL: false,
		rejectUnhauthorized: false,
		form: obj
	};

	Request(options, function(error, response, body){
		console.log(error)
		console.log(response)
		console.log(body)
		console.log(
			`
			####### ##         ##       #####  ##   ##
			##      ##        ####     ##      ##   ##
			#####   ##       ##  ##     ####   #######  `+"RUUUUUUUUNNNNNN"+`
			##      ##      ########       ##  ##   ##
			##      ###### ##      ##  #####   ##   ##
			`
		);
	})
}

exports.requestApi()
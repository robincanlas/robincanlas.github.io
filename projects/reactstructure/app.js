/**
 * 
 * @Author: Kristoffer Robin Canlas (aka: Wally West)
 * @Company: Leekie Enterprises
 * @2018
 * @FilePath: app.js
 * @Version: 1.0
 * @Created: May 24, 2018
 * @Changes: May 24, 2018
 * @Desc: main app for LURK
 * 
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	async = require('async'),
	bodyParser = require('body-parser'),
	app = express(),
	httpServer = http.createServer(app),
	port = 8080;

app.set('views', 'views');
app.set('view engine', 'pug');
app.set("view options", { layout: false });
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit:'2mb'}));
app.use(bodyParser.urlencoded({limit:'2mb', extended: true }));

var desktop = true;

// RENDER INDEX PAGE [S]
app.get('/', function(req, res){
	if(desktop){
		res.render('desktop/index', { title: 'JANKENPON'});
	}else{
		res.render('mobile/index', { title: 'JANKENPON'});
	}
});
// RENDER INDEX PAGE [E]

// require('./resources/web-socket')(app, io, express, Config);

httpServer.listen(port, function(){
	console.log(
		`
		####### ##         ##       #####  ##   ##
		##      ##        ####     ##      ##   ##
		#####   ##       ##  ##     ####   #######  `+'listening to port '+port+`
		##      ##      ########       ##  ##   ##
		##      ###### ##      ##  #####   ##   ##
		`
	);
	// require('./apps/app-socket')(io)
});
const express = require('express'),
	app = express(),
	path = require('path'),
	http = require('http'),
	https = require('https'),
	socketIo = require('socket.io'),
	fs = require('node-fs'),
	server = http.createServer(app),
	io = socketIo.listen(server),
	ConfigsRoot = require('./configs/config-root'),
	port = 9999;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
	res.render('index', {title: 'React App'})
});

app.listen(port, () => {
	console.log('server listening to port '+port);
});

server.listen(ConfigsRoot.appPort, ConfigsRoot.appIp, () => {	// let the server to listen
	console.log("Express server listening on port " + ConfigsRoot.appPort);
});

var ImagesModel = require('./models/images-model').ImagesModel;

ImagesModel.create({
	src: 'test'
}, (err, model) => {
	console.log(model);
})
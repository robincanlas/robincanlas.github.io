const mongoose = require('mongoose');

// IP config
// exports.appPort = 5000;
// exports.appPortHttp = 5001
// exports.appIp = "192.168.250.133";

// Connect to mongodb
// mongoose.connect('mongodb://'+exports.appIp+'/sample');
mongoose.connect('mongodb://localhost/testDB');

mongoose.connection.once('open', () => {
	console.log('MongoDB connection has been made!')
}).on('error', (error) => {
	console.log('MongoDB connection error');
});
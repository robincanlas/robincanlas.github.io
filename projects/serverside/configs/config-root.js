
var fs = require('node-fs');
var mongoose = require('mongoose');

exports.appPort = 5000;
exports.appPortHttp = 5001;
exports.appIp = "192.168.250.133";

exports.EXPRESS_SID_KEY = 'TrainingKey';
exports.COOKIE_SECRET = 'TrainingCookie';

mongoose.connect('mongodb://'+exports.appIp+'/sample');
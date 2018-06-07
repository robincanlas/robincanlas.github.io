
var fs = require('node-fs');
var mongoose = require('mongoose');

exports.appPort = 9999;
exports.appPortHttp = 9990;
exports.appIp = "localhost";

exports.EXPRESS_SID_KEY = 'rkey';
exports.COOKIE_SECRET = 'rcookie';

mongoose.connect('mongodb://'+exports.appIp+'/main');
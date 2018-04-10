/**
 * 
 * @Author: John Carlo Baybin
 * @Company: Nuevasys
 * @2016
 * @FilePath: /configs/config-root.js
 * @Version: 1.0
 * @Desc: Config script
 * @Changelogs: 
 * 
 **/
var fs = require('node-fs');
var mongoose = require('mongoose');

/**
 * IP CONFIG
 **/
exports.appPort = 5000;
exports.appPortHttp = 5001;
exports.appIp = "192.168.250.133";

/**
 * KEY
 **/
exports.EXPRESS_SID_KEY = 'TrainingKey';
exports.COOKIE_SECRET = 'TrainingCookie';

/**
 * DATABASE
 **/
mongoose.connect('mongodb://'+exports.appIp+'/sample');
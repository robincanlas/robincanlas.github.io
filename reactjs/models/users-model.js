var mongoose = require('mongoose');

exports.userSchema = new mongoose.Schema({ 
	username: {type: String, default:''},
	first_name: {type: String, default:''},
	last_name: {type: String, default:''}
});

exports.UsersModel = mongoose.model('users', exports.userSchema);
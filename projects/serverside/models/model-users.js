var mongoose = require('mongoose');

exports.userSchema = new mongoose.Schema({ // section
 username : String,
 password : String,
 displayname: String,
 dateRegistered: Date,
 profile : {},
 friends : [],
 rooms : [],
 login: Boolean
});

exports.UserModel = mongoose.model('users', exports.userSchema);
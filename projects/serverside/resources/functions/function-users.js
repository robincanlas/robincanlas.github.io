var UsersDB = require('../../models/model-users').UserModel;
var User = require('../class/user');


exports.CreateUser = function(data, usersObject, next){
 	UsersDB.create({
	  username : data.username,
	  password : data.password,
	  displayname : data.displayname,
	  dateRegistered : new Date(),
	  login: false,
	  rooms: data.rooms,
	  profile : {
	  	name : data.name,
	  	age : data.age,
	  	gender : data.gender
	  }
	 }, function(err, added) {
	 	var usersObject = {};
		usersObject[added._id] = new User(data);
	 	console.log(usersObject)
	  	next();
	 });
}

exports.loadDB = function(usersObject){
	UsersDB.find({}, function(err, users){
		for(var i = 0;i < users.length; i++){
			usersObject[users[i]._id] = new User(users[i]);
		}
		console.log(usersObject)
	});
}

exports.getUserList = function(usersObject){
	var lists = [];
	for(var i in usersObject){
		if(usersObject[i].login){
			var obj = {};
			obj.displayname = usersObject[i].displayname;
			obj.profile = {
			  	name : usersObject[i].profile.name,
			  	age : usersObject[i].profile.age,
			  	gender : usersObject[i].profile.gender
			};
			obj.username = usersObject[i].username
			obj.login = usersObject[i].login;
			lists.push(obj);
		}
	}
	return lists;
}

exports.getByUsername = function(usersObject, username, next){
	for(var i in usersObject){
		if(usersObject[i].username === username){
			if(usersObject[i].login){
				next('SUCCESS',usersObject[i]); 				
			}else{
				next('USER NOT LOGIN');
			}
			break;
		}

	}
};
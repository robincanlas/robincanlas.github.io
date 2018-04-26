exports.userExist = function(username, usersObject){
	var success = true;
	for(var i in usersObject){
		if(usersObject[i].username === username){
			success = false; 
			break;	
		} 
	}
	return success;
};

exports.checkUser = function(data, usersObject, next) {
	exports.checkString(data.username, function(usernameOK) {
		if(usernameOK) {
			exports.checkString(data.password, function(passwordOK){
				if(passwordOK){
					exports.checkString(data.displayname, function(displaynameOK){
						if(displaynameOK){
							if(exports.userExist(data.username, usersObject)){
								next('SUCCESS');
							}else{
								next('USER ALREADY EXIST')
							}
						}else{
							next('INVALID DISPLAYNAME');
						}
					})
				}else{
					next('INVALID PASSWORD');
				}
			});
		}else{
			next('INVALID USERNAME');
		}
	})
};

exports.checkString = function(string, next) {
	if(string !== '' && string !== null) {
		next(true);
	} else next(false);
};

exports.setSocketID = function(username, usersObject, sID){
	var set = false;
	for(var i in usersObject){
		if(usersObject[i].username === username){
			usersObject[i].SID = sID;
			usersObject[i].login = true;
			break;	
		} 
	}
	return set;
};

exports.checkUsername = function(username, password, usersObject){
	var valid = false;
	for(var i in usersObject){
		if(usersObject[i].username === username && usersObject[i].password === password){
			valid = true; 
			break;
		} 
	}
	return valid;
};

exports.checkAlreadyLogin = function(usersObject, data){
	var login = false;
	for(var i in usersObject){
		if(usersObject[i].username === data.username && usersObject[i].password === data.password){
			if(usersObject[i].login){
				login = true; 
			}else{
				usersObject[i].login = true;
				login = false;
			}
			break;
		} 
	}
	return login;
}

exports.checkLoginDetails = function(data, usersObject, next){
	if(exports.checkUsername(data.username, data.password, usersObject)){
		if(exports.checkAlreadyLogin(usersObject, data)){
			next('USER ALREADY LOGIN');
		}else{
			next('SUCCESS');	
		}
	}else{
		next('WRONG USERNAME OR PASSWORD');
	}
};

exports.logoutUser = function(username, usersObject, next){
	for(var i in usersObject){
		if(usersObject[i].username === username){
			usersObject[i].login = false;
			break;	
		} 
	}
	next('Logout Successfully');
}
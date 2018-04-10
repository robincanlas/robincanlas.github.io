// ##SESSION MA NIGGA!
module.exports = function(io, app, cookieParser, sessionStore, usersObject){

	var ConfigsMain = require('./configs/config-root');
	var functionValidate = require('./resources/functions/validate');
	var functionUsers = require('./resources/functions/function-users');

	var EXPRESS_SID_KEY = ConfigsMain.EXPRESS_SID_KEY;
	io.set('authorization', function (data, callback) {
		if(!data.headers.cookie) {
			return callback('No cookie transmitted.', false);
		}
		
		cookieParser(data, {}, function(parseErr) {
			if(parseErr) { return callback('Error parsing cookies.', false); }

			var sidCookie = (data.secureCookies && data.secureCookies[EXPRESS_SID_KEY]) ||
							(data.signedCookies && data.signedCookies[EXPRESS_SID_KEY]) ||
							(data.cookies && data.cookies[EXPRESS_SID_KEY]);

			sessionStore.load(sidCookie, function(err, session) {
				// if (err || !session || session.isLogged !== true) {
					// callback('Not logged in.', false);
				// } else {
					// disabled condition to allow no session and store session
					data.session = session;
					console.log(data.session)
					callback(null, true);
				// }
			});
		});
	});

	

	app.post('/login', function(req, res){
		var rsName = req.get('Host');
		console.log('######################## LOG IN', req.body.username, req.body.password);
		functionValidate.checkLoginDetails(req.body, usersObject, function(callback){
			// socket.emit('loginValidate', callback)
			if(callback === 'SUCCESS'){
				// REDIRECT TO LOGIN PAGE and SET SESSIONS
				console.log('PASOOOOOOOOOOOOOOOOOOOOOOOKKKKKKKKKKKKKKKKKKKKKK');
				console.log('http://' + rsName + '/lobby' );
				var data = {
					message: callback,
					url: 'http://' + rsName + '/lobby' 
				}
				res.send(data);
				req.session.isLogged = true;
				req.session.username = req.body.username;
				console.log(req.body, 'BODDDYYYYY');
				
				// functionValidate.setSocketID(req.body.username, usersObject, socket.id);
				// socket.emit('userList', functionUsers.getUserList(usersObject))

				// setInterval(function(){
				// 	socket.emit('userList', functionUsers.getUserList(usersObject))
				// },3000);
			}else{
				console.log('wooof wooof')

				var data = {
					message: callback,
					url: 'http://' + rsName + '/'
				};
				res.send(data);
				req.session.isLogged = false;
				req.session.username = '';
			}
		});
	});

	app.post('/logout', function(req, res){
		var rsName = req.get('Host');
		functionValidate.logoutUser(req.session.username, usersObject, function(callback){
			var data = {
				message: callback,
				url: 'http://' + rsName + '/'
			};
			res.send(data);
			req.session.isLogged = false;
			req.session.username = '';
		})

	});

	

}

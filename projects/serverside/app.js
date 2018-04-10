/**************************************************
 * Init Settings
 **************************************************/
var ConfigsMain = require('./configs/config-root'),
express = require('express'),
routes = require('./routes'),
http = require('http'),
https = require('https'),
path = require('path'),
socketIo = require('socket.io'),
fs = require('node-fs');

var app = express(),
server = http.createServer(app),
io = socketIo.listen(server);
var cookieParser = express.cookieParser(ConfigsMain.COOKIE_SECRET);
var sessionStore = new express.session.MemoryStore();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.methodOverride());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.configure('development', function () {
	app.locals.pretty = true;
	app.use(express.bodyParser());
	app.use(cookieParser);
	app.use(express.session({
		store: sessionStore,
		cookie: {
			httpOnly: true
		},
		key: ConfigsMain.EXPRESS_SID_KEY
	}));
});
app.use(app.router);
app.use(express.static(__dirname + "/public"));
app.use(function(err, req, res, next) {
	if(!err) return next();
	console.log(err.stack);
	res.json({error: true});
});
server.listen(ConfigsMain.appPort, ConfigsMain.appIp, function(){	// let the server to listen
	console.log("Express server listening on port " + ConfigsMain.appPort);
});

/**************************************************
 * Routes
 **************************************************/
app.get('/', function(req,res){
	if(!req.session.isLogged){
		res.render('index');
	}else{
		res.render('lobby');
	}
});
app.get('/lobby', function(req, res){
	console.log('############################# /lobby', req.session);
	if(!req.session.isLogged){
		res.render('index');
	}else{
		res.render('lobby');
	}
});
app.get('/logout', function(req, res){
	req.session.isLogged = false;
	req.session.username = '';
	res.render('index');
});
app.get('/table', function(req, res){	
	// var foundYou = roomsObject[serverId].players.indexOf(req.session.username);
	if(req.session.isLogged){
		res.render('table', {
			rs : {
				sid : serverId, 
			}
		});
	}else{
		res.render('index');
	}
});

/**************************************************
 * Socket Connection
 **************************************************/
var functionValidate = require('./resources/functions/validate');
var functionUsers = require('./resources/functions/function-users');
var functionRooms = require('./resources/functions/function-rooms');
var functionAccs = require('./resources/functions/function-accs');
var functionGame = require('./resources/functions/function-game');
var UsersDB = require('./models/model-users').UserModel;
var RoomsDB = require('./models/model-rooms').RoomModel;
var User = require('./resources/class/user');
var usersObject = {};
var roomsObject = {};
var accsObject = {};
var playerAction = [];
var serverId = null;
var alreadyShowdown = false;
var counter = 1;

setTimeout(function(){
	console.log('LOAD DB ########################## ROOMS DB', roomsObject)
	functionUsers.loadDB(usersObject);
	functionRooms.loadDB(roomsObject);
	functionAccs.loadDB(accsObject);
},1000)


Session = require('./session');
Session(io, app, cookieParser, sessionStore, usersObject);


io.on('connection', function(socket){
	console.log('Connected to Server');
	console.log(socket.request.session);
	var session = socket.request.session;
	// setTimeout(function(){
		// socket.emit('rooms', roomsObject);
		// socket.emit('accs', accsObject);
	// },1000)

	functionRooms.checkIfInsideRoom(roomsObject, session, serverId, function(callback){
		if(callback){
			socket.join(serverId);
		}else{
			socket.leave(serverId);
		}
	});


	socket.on('getRooms', function(){
		if(session.isLogged){
			socket.emit('rooms', roomsObject);
			setInterval(function(){
				socket.emit('updateRooms', roomsObject);
			},5000);
		}
	});

	socket.on('sendGroupMessage', function(data){
		io.to(data.id).emit('groupMessages', {
			message: data.message,
			name: data.name
		});
	});

	socket.on('useEmoji', function(data){
		var obj = {};
		obj.message = '<span class=' + data.id +'></span>';
		obj.name = data.name;

		io.to(data.roomId).emit('groupMessages', obj);
	});

	socket.on('joinRoom', function(data){
		functionRooms.addUserCount(data, roomsObject, session.username, function(callback){
			socket.join(data.id);
			serverId = data.id;
			socket.emit('joinResponse', callback);

		});
	});

	socket.on('leaveRoom', function(data){
		socket.leave(data.id);
		
		functionRooms.removeUserCount(data, roomsObject, session.username, function(callback){
			if('SUCCESS'){
				socket.emit('leaveRoom');
			}
		});
	});

	socket.on('checkPlayerRoom', function(){
		// socket.emit('playerCount', roomsObject[serverId].userList);

	});

	socket.on('message', function(data){
		switch(data.type){
			case 1: 
				socket.emit('message', data);
				console.log(socket.id);
				break;
			case 2: 

			case 3: 

			case 4:
				io.emit('message', data);
				break;
			case 6:
				functionUsers.getByUsername(usersObject, data.targetUsername, function(message, userData){
					if(message === 'SUCCESS'){
						io.to(userData.SID).emit('message', data);
					}
				});
				break;
			default:
				console.log('error')
			
		}
	});

	socket.on('register', function(data){
		console.log('############################################## REGISTER!!', usersObject)

		functionValidate.checkUser(data, usersObject, function(callback) {
			if(callback === 'SUCCESS'){	
				functionUsers.CreateUser(data, usersObject, function(){
					console.log('DONE')
				});
			}

			socket.emit('registerValidate', callback)
		});

	});

	socket.on('gameStart', function(){
		var count = 0;
		// functionRooms.resetUserAction(playerAction);

		// var gameCounter = setInterval(function(){
		// 	count++;
		// 	socket.emit('countDown', count);

		// 	if(count >= 3){
		// 		clearInterval(gameCounter);
		// 		socket.emit('animateHands');
		// 		setTimeout(function(){
		// 			socket.emit('revealHands');
		// 		})
		// 	}
		// },1000);
	});

	socket.on('gameEnd', function(){
		players.length = 0;
	});

	socket.on('playerBet', function(data){

		socket.emit('playerCanPick', true);
	});

	setTimeout(function(){
		console.log(session)
		var obj = {
			userId: 1,
			username: 'test',
			bet: '100'
		};

		functionRooms.addPlayerBet(obj, (canPick) => {
			setTimeout(() =>{

			},3000);
		});
		
	},3000);

	socket.on('setMyHand', function(data){
		socket.emit('handReady', true);

		// 2 players
		// bet first for Player 1 and 2
		// after betting, players can pick the hand
		// Player 1 pick hand -> check if ready to showdown
		// Player 2 pick hand -> check if ready to showdown
		// check if ready to showdown
		// if ready to showdown get the hands and get the winners according to hand


		// io.to(serverId).emit('handReceived');

		if(!alreadyShowdown){
			functionRooms.addUserAction(playerAction, session, data, function(callback){
				functionRooms.checkIfShowdown(playerAction, function(showdown){
					console.log('CAN SHOWDOWN', showdown, serverId);
					// alreadyShowdown = showdown;
					if(showdown){
						console.log('TYPEOFF', typeof serverId);
						io.to(serverId).emit('showdown', playerAction);
						// socket.emit('showdown');
						setTimeout(function(){
							io.to(serverId).emit('gameEnd');
							console.log('GAME END');
							functionRooms.resetUserAction(playerAction);
						}, 4000);
					}
				});
			});
		}
	});

});


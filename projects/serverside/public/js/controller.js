(function(){
	// try{
	// 	if(!rs) throw "rs is not Defined";
	// 	if(!window.angular) throw "Angular is not Defined";
	// }catch(err){
	// 	return console.log(err);
	// }

	var app = angular.module('appTraining', ['ngSanitize'])
	
	.constant("_FIRM", {
		gameStage: new createjs.Stage(document.getElementById("canvas")),
		loadQueue: new createjs.LoadQueue(false, null, true),
		handSpritePos: {
			rock: [0,0,"rock"],
			paper: [1,1,"paper"],
			scissor: [2,2,"scissor"]
		}
	})

	.service("Create", function(_FIRM){
		var self = new function Create(){};

		self.createCont = function(name,x,y,visible){
			var container = new createjs.Container();
			container.name = name;
			container.x = x;
			container.y = y;
			container.visible = visible;
			
			return container;
		};
		self.createText = function(name,txt,x,y,color,width,font){
			font = (font == "oxygen") ? "12px Oxygen" : "bold 15px Digital-7";

			var text = new createjs.Text(txt, font, color);
			text.name = name;
			text.x = x;
			text.y = y;
			text.textAlign = "center";
			text.maxWidth = width;
			
			return text;
		};
		self.createSprite = function(name, image, x, y, scaleX, scaleY, jump, alpha, regX, regY){
			var sprite = new createjs.Sprite(image, jump);
			sprite.name = name;
			sprite.x = x;
			sprite.y = y;
			sprite.scaleX = scaleX;
			sprite.scaleY = scaleY;
			sprite.regX = regX;
			sprite.regY = regY;
			sprite.alpha = alpha;
			
			return sprite;
		};
		self.hands = function(){
			var cards = new createjs.SpriteSheet({
				images: [_FIRM.loadQueue.getResult("hands")],
				frames: {width: 106, height: 106},
				animations : _FIRM.handSpritePos
			});

			return cards;
		};

		return self;
	})

	.factory('socket', function ($rootScope) {
		var socket = io({
			'reconnect': true,
			'reconnection delay': 1000,
			'max reconnection attempts': 30,
			'secure': true,
			'transports':['websocket']
		});
		return {
			on: function (eventName, callback) {
				socket.on(eventName, function () {  
					var args = arguments;
						$rootScope.$apply(function () {
						callback.apply(socket, args);
					});
				});
			},
			emit: function (eventName, data, callback) {
				socket.emit(eventName, data, function () {
					var args = arguments;
						$rootScope.$apply(function () {
							if (callback) {
							callback.apply(socket, args);
						}
					});
				});
			}
		};
	})


	.controller('ctrlTraining', function(socket, msgFactory, gameFactory) {
		this.msgFactory = msgFactory;
		this.gameFactory = gameFactory;


	})


	.directive('updateDchatScroll' ,function(){
		return function(scope, element, attrs){
			var ddom = document.getElementById('chatbox');	
			ddom.scrollTop = ddom.scrollHeight;
			console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', ddom.scrollHeight);		
			ddom = null;
		}
	})

	.factory('msgFactory', function(socket, $http,$timeout){
		var self = {
			init: function(){
				self.rooms = [];
				self.accs = [];
				self.room = {};
				self.roomIndexSelected = 0;
				self.showEmojiCont = false;
				self.objMsg = {
					type: 6,
					message: '',
					color: 'cyan'
				};
				self.groupMessages = [];
				self.groupMessage = {
					value : '',
					name : ''
				}
				self.messageType = [
					{value: 'Self', type: 1, color: 'blue'},
					{value: 'Guild', type: 2, color: 'green'},
					{value: 'Party', type: 3, color: 'orange'},
					{value: 'All', type: 4, color: 'red'},
					{value: 'Friends', type: 5, color: 'black'},
					{value: 'Private', type: 6, color: 'cyan'}
				];
				self.targetUsername = 'test';
				self.messages = [];
				self.userList = [];
				self.showChatPage = false;
				self.registerInput = {username:'', password: '', displayname:'', gender:'', name: '', age: ''};
				self.loginInput = {username:'', password: ''};
				self.shownPage = '';
				self.login = false;
				self.join = false;
			},
			showEmoji: function(){
				self.showEmojiCont = !self.showEmojiCont;
			},
			showPage: function(data){
				self.shownPage = data;
				if(data === 'login'){
					$timeout(function(){
						document.getElementById("loginIDinput").focus()
					})
				}
			},
			setMessageType: function(data){
				self.objMsg.type = data.type;
				self.objMsg.color = data.color;
			},
			sendMessage: function(){
				if(self.objMsg.type === 6){
					self.objMsg.targetUsername = self.targetUsername;
					socket.emit('message', self.objMsg);
				}else{
					socket.emit('message', self.objMsg);
				}
				
				self.objMsg.message = '';
			},
			register: function(){
				socket.emit('register', self.registerInput);
			},
			loginChat: function(){
				$http.post('/login', self.loginInput).then(function(response){
					// SUCCESS
					location.replace(response.data.url);
					if(response.data.message !== 'SUCCESS'){
						alert(response.data.message);
					}
				}, function(response){
					// FAIL
					console.log(response);
				})
				// socket.emit('login', self.loginInput);
			},
			logout: function(){
				$http.post('/logout').then(function(response){
					location.replace(response.data.url);
				}, function(response){

				});
			},
			sendGroupMessage: function(message, room){
				if(!self.join || message.value === '') return;

				socket.emit('sendGroupMessage', {
					id: room.id,
					message: message.value,
					name: message.name
				})

				self.groupMessage.value = '';
			},
			joinServer: function(){
				socket.emit('joinRoom', self.rooms[self.roomIndexSelected]);
				// self.join = true;
			},
			leaveGroupChat: function(){
				socket.emit('leaveRoom', self.rooms[self.roomIndexSelected]);
				// self.join = false;
			},
			useEmoji: function(data, name){
				socket.emit('useEmoji', {
					roomId: self.room.id,
					id: data.id, 
					name: name
				});

				self.showEmojiCont = false;
			},
			selectServer: function(index){
				self.roomIndexSelected = index;
				for(var i = 0;i < self.rooms.length;i++){
					self.rooms[i].active = false;
				}
				self.rooms[index].active = true;
				self.room = self.rooms[index];
			}
		};
		return self;
	})

	.factory('gameFactory', function(_FIRM, Create, socket){
		var self = {
			init: function(){
				var loadQueue, folder = "/images/";
				self.playerCount = 0;
				self.gameStage = _FIRM.gameStage;

				self.images = [
					{src:'http://192.168.250.133:5000'+folder+"hands.jpg", id:"hands"},
					{src:'http://192.168.250.133:5000'+folder+"seat.png", id:"seat"},
					{src:'http://192.168.250.133:5000'+folder+"avatar.png", id:"avatar"},
				];

				self.chairPosition = [
					{x: 150, y: 100},
					{x: 400, y: 100}
				];

				var loadQueue = _FIRM.loadQueue;
				loadQueue.loadManifest(self.images);
				loadQueue.addEventListener("complete", function(){
					self.createTableAssets();
					createjs.Ticker.addEventListener('tick', self.gameStage);
				});
			},
			createTableAssets: function(){
				for(var i = 0; i < 2; i++){
					var pos = i;
					var chair = Create.createCont('chairCont'+i, 0, 0, true);
					var chairImage = new createjs.Bitmap(_FIRM.loadQueue.getResult('seat'));
					chairImage.name = 'chairImage';
					chairImage.x = self.chairPosition[i].x;
					chairImage.y = self.chairPosition[i].y;
					var circle = new createjs.Graphics();
					circle.setStrokeStyle(1);
					circle.beginStroke('white');
					circle.beginFill('maroon');
					circle.drawCircle(0,0,40);
					var shape = new createjs.Shape(circle);
					shape.name = 'shape'+pos;
					shape.x = self.chairPosition[i].x+25;
					shape.y = self.chairPosition[i].y+25;
					shape.cursor = 'pointer';

					var handCont = Create.createCont('handCont'+i, 0, 0, true);
					var handSprite = Create.createSprite("rock", Create.hands(), 450, 100, .7, .7, "rock", 1);
					handSprite.regX = handSprite.regY = 50;
					handSprite.rotation = 40;
					handSprite.alpha = 0;
					
					shape.addEventListener('click', function(){
						self.sitHere(pos);
					});

					handCont.addChild(handSprite);
					chair.addChild(shape, chairImage, handCont);
					self.gameStage.addChild(chair);
				}
				self.gameStage.enableMouseOver();
			},
			sitHere: function(pos){
				console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'kimochi!!', pos);		
			},
			setHand: function(data){
				socket.emit('setMyHand', data);
			},
			animateHands: function(data){
				// var handCont = self.gameStage.getChildByName('handCont');
				// var handSprite = handCont.getChildByName('rock');
				// var origY = handSprite.y;
				// createjs.Tween
				// 	.get(handSprite, {loop:true})
				// 	.to({y: 200}, 200, createjs.Ease.boundInOut)
				// 	.to({y: origY}, 200, createjs.Ease.boundInOut);
				// if(data === 1){

				// }

			},
			showdown: function(data){
				console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', data);		
			}
		};
		return self;
	})

	.run(function(socket, msgFactory, $timeout, gameFactory, $http) {		
		// msgFactory.init();
		// gameFactory.init();
		socket.emit('getRooms');
		socket.emit('checkPlayerRoom');
		socket.emit('gameStart');
		let obj = {playerOne: '', playerTwo: ''};
		//rock > scissor > paper > rock

		let getWinner = (playerOne, playerTwo, callback) => {
			if(playerOne === playerTwo){
				callback('draw');
			}else{
				switch(playerOne){
					case 'rock':
						if(playerTwo === 'scissor') callback('win')

						if(playerTwo === 'paper') callback('lose')
					break;
					case 'paper':
						if(playerTwo === 'rock') callback('win')

						if(playerTwo === 'scissor') callback('lose')
					break;
					case 'scissor':
						if(playerTwo === 'paper') callback('win')

						if(playerTwo === 'rock') callback('lose')
					break;

				}
			}
		}

		$timeout(function(){
			obj.playerOne = 'rock';
		},1000).then(function(){
			$timeout(function(){
				obj.playerTwo = 'paper';
				getWinner(obj.playerOne, obj.playerTwo, (playerOne) => {
					var playerTwo = 'win';
					if(playerOne === 'win') playerTwo = 'lose';
					console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'playerOne', playerOne, 'playerTwo', playerTwo);
				});
			},1000);
		});



		if(typeof rs !== 'undefined') socket.emit('checkPlayerCount', rs.sid);

		socket.on('showdown', function(data){
			gameFactory.showdown(data);
		});

		socket.on('gameEnd', function(){
			console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'game end');		
		});

		socket.on('pickHand', function(data){

		});

		socket.on('animateHands', function(data){
			gameFactory.animateHands();
		});

		socket.on('countDown', function(data){
			console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', data);		
		});

		socket.on('joinResponse', function(data){
			if(data === 'SUCCESS'){
				window.location.replace(window.location.origin + '/table');
			}
		});

		socket.on('leaveRoom', function(){
			if(data === 'SUCCESS'){
				window.location.replace(window.location.origin);
			}
		});

		socket.on('accs', function(data){
			for(i in data){
				msgFactory.accs.push(data[i]);
			}	
		});

		socket.on('message', function(data){
			msgFactory.messages.push(data);
		});

		socket.on('groupMessages', function(data){
			msgFactory.groupMessages.push(data);
		});

		socket.on('registerValidate', function(data){
			alert(data);
		});

		socket.on('loginValidate', function(data){
			if(data === 'SUCCESS'){
				msgFactory.login = true;
			}else{
				// FAIL LOGIN
				alert('FAILED TO LOGIN')
			}
		});

		socket.on('rooms', function(data){
			msgFactory.rooms = [];
			for(i in data){
				data[i].active = false;
				msgFactory.rooms.push(data[i]);
			}

			msgFactory.rooms[0].active = true;
		});

		socket.on('updateRooms', function(data){
			var selectedId = msgFactory.rooms[msgFactory.roomIndexSelected].id;
			msgFactory.rooms = [];
			angular.forEach(data, function(val, index){
				val.active = selectedId === index ? true : false;
				msgFactory.rooms.push(val);

			});
			// console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', msgFactory.rooms);		
		})

		socket.on('userList', function(data){
			msgFactory.userList = data;
		});

		socket.on('playerCount', function(data){
			gameFactory.playerCount = data;
		});
	});

}());
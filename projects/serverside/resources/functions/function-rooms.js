var RoomsDB = require('../../models/model-rooms').RoomModel;
var UsersDB = require('../../models/model-users').UserModel;
var PlayersDB = require('../../models/model-players').PlayerModel;
var Room = require('../class/room');

exports.loadDB = function(roomsObject){
	RoomsDB.find({}, function(err, rooms){
		for(var i in rooms){
			roomsObject[rooms[i]._id] = new Room(rooms[i]);
		}
	});
}

exports.addPlayerBet = function(playerObj, callback){
	PlayersDB.findOneAndUpdate({'username': playerObj.username}, {
		'$set': {
			'bet': playerObj.bet,
			'canPick': true
		}
	}, (err, model) => {
		if(err){
			console.log('ERRRRRRRRRR function-rooms.js addPlayerBet');			
		}

		if(model){
			callback(true);
		}else{
			callback(false);
		}
	});
}

exports.findUser = function(data, roomsObject, username){
	var foundYou = roomsObject[data.id].players.indexOf(username);
	return foundYou;
}

exports.addUserCount = function(data, roomsObject, username, next){
	console.log(username, '###########');

	if(exports.findUser(data, roomsObject, username) >= 0){
		next('ALREADY INSIDE THE SERVER');
	}else{
		UsersDB.findOne({'username': username}, (err, model) => {
			if(err){
				console.log('ERRRRRRRRRR function-rooms.js addUserCount');
			}

			if(model){
				PlayersDB.findOne({
					'userId': model._id
				}, (err, playerModel) => {
					if(err){
						console.log('ERRRRRRRRRR function-rooms.js addUserCount');
					}

					if(playerModel){
						next('ALREADY INSIDE THE SERVER');
					}else{
						PlayersDB.create({
							'userId': model._id,
							'username': model.username,
							'roomId': roomsObject[data.id].id,
							'roomName': roomsObject[data.id].roomName 
						}, (err, model) => {
							roomsObject[data.id].userList += 1;
							roomsObject[data.id].players.push(username);
							next('SUCCESS');
						});
					}

				});
			}else{
				next('FAILED')
			}
		});
	}
}

exports.checkIfInsideRoom = function(roomsObject, session, serverId, next){
	var found = false;
	if(serverId){
		for(var i = 0;i < roomsObject[serverId].players.length;i++){
			if(roomsObject[serverId].players[i] === session.username){
				found = true;
				break;
			}
		}
	}

	next(found);
}

exports.removeUserCount = function(data, roomsObject, username, next){
	var index = exports.findUser(data, roomsObject, username);
	if(index >= 0){
		roomsObject[data.id].players.splice(index, 1);
		roomsObject[data.id].userList -= 1;
		next('SUCCESS');
	}
}

exports.findUsername = function(array, username){
	var exist = false;
	for(var i = 0;i < array.length;i++){
		if(array[i].username === username){
			exist = true;
			break;
		}
	}
	return exist;
}





exports.getWinner = (playerOne, playerTwo, callback) => {
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

exports.resetUserAction = function(playerAction){
	for(var i = 0;i < playerAction.length;i++){
		if(playerAction[i].state){
			playerAction[i].state = false;
		}
	}
}

exports.addUserAction = function(playerAction, session, data, next){
	if(exports.findUsername(playerAction, session.username)){
		var index = playerAction.findIndex(function(val){
			return val.username === session.username;
		});

		playerAction[index].state = true;
		playerAction[index].hand = data;
	}else{
		var obj = {};
		obj.username = session.username;
		obj.hand = data;
		obj.state = true;
		playerAction.push(obj);
	}

	console.log(playerAction)

	next('added')
}

exports.checkIfState = function(playerAction){
	var allTrue = playerAction.every(function(val){
		return val.state === true;
	});
	return allTrue;
}

exports.checkIfShowdown = function(playerAction, next){
	var showdown = false;
	if(playerAction.length > 1){
		showdown = exports.checkIfState(playerAction);
	}
	next(showdown);
}
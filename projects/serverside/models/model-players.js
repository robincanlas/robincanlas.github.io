var mongoose = require('mongoose');

exports.playerSchema = new mongoose.Schema({ // section
	userId: {type: String, default: ''},
	username: {type: String, default: ''},
	roomId: {type: String, default: ''},
	roomName: {type: String, default: ''},
	bet: {type: Number, default: 0},
	canBet: {type: Boolean, default: false},
	canPick: {type: Boolean, default: false}
});
exports.PlayerModel = mongoose.model('Players', exports.playerSchema);
var mongoose = require('mongoose');

var banPlayerListSchema = new mongoose.Schema({
	date_created: {type: Date, default: new Date()},
	date_modified: {type: Date, default: new Date()}, //update when goco confirm
	userId : String,
	player_name : String,
	player_username : String,
	status : Number,
	category : String,
	report_id : String,
	confirm_game_tester : String,
	confirm_goco : String
});

exports.banPlayerListModel = mongoose.model('ban_player_lists',banPlayerListSchema);
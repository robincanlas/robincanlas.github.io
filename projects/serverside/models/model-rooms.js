var mongoose = require('mongoose');

exports.roomSchema = new mongoose.Schema({ // section
 roomName : String,
 userList : Number,
 players : [],
 _id : {type: mongoose.Schema.Types.ObjectId}
});
exports.RoomModel = mongoose.model('rooms', exports.roomSchema);
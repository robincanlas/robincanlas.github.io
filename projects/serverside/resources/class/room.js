function Rooms(data) {
 this.roomName = data.roomName;
 this.userList = data.userList;
 this.id = data._id;
 this.players = data.players;
};

module.exports = Rooms;
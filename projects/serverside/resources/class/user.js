var Profile = require('./profile');

function Users(data) {
 this.username = data.username;
 this.password = data.password;
 this.displayname = data.displayname;
 this.date_registered = new Date();
 this.profile = new Profile(data);
 this.login = data.login;
 this.user = data.user;
};

module.exports = Users;
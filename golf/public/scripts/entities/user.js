define(["app"], function(App){

	App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){

		Entities.User = Parse.Object.extend({
			className: 'User',
			signingUp: function(options){
				this.set('firstName', options.view.ui.fname.val());
				this.set('lastName', options.view.ui.lname.val());	
				this.set('username', options.view.ui.uname.val());	
				this.set('password', options.view.ui.pword.val());	
				this.set('phone', options.view.ui.phone.val());	
				this.set('email', options.view.ui.email.val());

				this.signUp(null, {
					success: function(user) {
					  // Hooray! Let them use the app now.
					},
					error: function(user, error) {
					  // Show the error message somewhere and let the user try again.
					  alert("Error: " + error.code + " " + error.message);
					}
				});
			}
		});

		Entities.UsersCollection = Parse.Collection.extend({
			initialize: function(){
				this.query = new Parse.Query( Entities.User );
			},
			model: Entities.User,
			logIn: function(username, password){
				var defer = $.Deferred();
				Parse.User.logIn(username, password, {
					success: function(user) {
						defer.resolve(user);
					  // Do stuff after successful login.
					},
					error: function(user, error) {
						console.log(user, error);
					  // The login failed. Check error to see why.
					}
				});
				
				return defer.promise()
			},

			checkId: function(options){		
				this.query.equalTo('objectId', options);
				var user = this.query.collection();
				var defer = $.Deferred();
				user.fetch({
					success: function(user) {
						defer.resolve(user);
					},
				});

				return defer.promise();
			},
		});
	
		var API = {

			getUserInfo: function(options){
				var defer = $.Deferred()
					memberId = options.model.get('memberId');
				var query = new Parse.Query(Entities.Reservation)
					.get(memberId, {
						success: function(data){
							defer.resolve(data);
						}
					});

				return defer.promise();
			},
			
			checkId: function(options){
				var id = options;

				var query = new Parse.Query(Entities.User)
					.equalTo('objectId', id);
				var users = query.collection();
				console.log(users);
				users.fetch();

				return users;
			},

			userApp: function(data){
				return new Entities.User();
			},

			loginUser: function(){
				return new Entities.UsersCollection();
			},			
		};
		App.reqres.setHandler("username:entity", function(options){
			return API.getUserInfo(options);
		});

		App.reqres.setHandler("username:static", function(options){
			return API.userApp(options);
		});

		App.reqres.setHandler('get:user', function(options){
			return API.checkId(options)
		});

		App.reqres.setHandler("login:test", function(options){
			return API.loginUser(options);
		});	
	});

	return App.Entities;

});
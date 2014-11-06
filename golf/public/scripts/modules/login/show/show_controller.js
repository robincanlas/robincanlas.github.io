define([
	'app',
	'modules/login/show/show_view',
	'entities/user'
], function(App, View){

	App.module('LoginApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Controller = Marionette.Controller.extend({
		
			initialize: function(){

				this.layout = this.getLayoutView();
				
				App.mainRegion.show(this.layout);

				this.collection = App.request("login:test")

				this.listenTo(this.layout, 'user:login', this.userLogIn);
			},
			
			userLogIn: function(){
				var username = this.layout.ui.username.val();
				var password = this.layout.ui.password.val();
				var that = this;

				var logIn = this.collection.logIn(username, password);
				
				logIn.done(function(data){
					App.vent.trigger('show:home:page', data);
					that.layout.destroy();
				});
			},
			
			getLayoutView: function(){
				return new View.Layout();
			}

		});

	});
	
	return App.LoginApp.Show;
		
});

define([
	'app',
	'entities/user',
], function(App){

	App.module('LoginApp', function(LoginApp, App, Backbone, Marionette, $, _){
	
		LoginApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'login': 'showLogin'
			}
		});

		var API = {
			showLogin: function(){
				
				require(['modules/login/show/show_controller'], function(){
					new LoginApp.Show.Controller();
				});
			}
		};
		
		App.addInitializer(function(){
			API.showLogin();
		});



		App.vent.on('data:login:page', function(){
			Backbone.history.navigate('login');
			API.showLogin();
		});

	});

	return App.LoginApp;
});
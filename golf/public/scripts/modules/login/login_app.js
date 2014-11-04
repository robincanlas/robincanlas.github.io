define([
	'app'
], function(App){

	App.module('LoginApp', function(LoginApp, App, Backbone, Marionette, $, _){
	
		this.startWithParent = false;
		
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

	});

	return App.LoginApp;
});
define([
	'app',
	'text!modules/login/show/templates/layout.html',	
], function(App, LayoutTemplate){

	App.module('Login.Show', function(Show, App, Backbone, Marionette, $, _){

		Show.Layout = Marionette.LayoutView.extend({
			ui: {
				username: 'input#username',
				password: 'input#password'
			},
			template: LayoutTemplate,
			triggers: {
				'click [data-login]': 'user:login'
			}
		});
		
	});

	return App.Login.Show;
	
});

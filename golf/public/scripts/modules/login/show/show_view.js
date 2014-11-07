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
			events: {
				'keyup' : 'loginEnter'
			},
			template: LayoutTemplate,
			triggers: {
				'click [data-login]': 'user:login'
			},
			loginEnter: function(e){
				if ( e.keyCode == 13) {
					this.trigger('user:login')
				};
			}
		});
		
	});

	return App.Login.Show;
	
});

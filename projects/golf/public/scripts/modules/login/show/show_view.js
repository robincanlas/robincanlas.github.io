define([
	'app',
	'text!modules/login/show/templates/layout.html',	
	'text!modules/login/show/templates/sign-up.html',
	'text!modules/login/show/templates/success.html',
], function(App, LayoutTemplate, SignUpTemplate, SuccessTemplate){

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
				'click [data-login]': 'user:login',
				'click [data-sign-up]' : 'user:sign:up'
			},
			loginEnter: function(e){
				if ( e.keyCode == 13) {
					this.trigger('user:login')
				};
			}
		});

		Show.ModalLayout = Marionette.ItemView.extend({
			template: SignUpTemplate,
			ui:{
				fname:'input#fname',
				lname:'input#lname',
				uname:'input#username',
				pword:'input#password',
				vpword:'input#vpassword',
				phone:'input#phone',
				email:'input#email'
			},
			triggers: {
				'click [data-sign-up]' : 'data:sign:up'
			}
		});

		Show.Success = Marionette.ItemView.extend({
			template: SuccessTemplate,
			triggers: {
				'click [data-close]' : 'data:close'
			}
		});
		
	});

	return App.Login.Show;
	
});

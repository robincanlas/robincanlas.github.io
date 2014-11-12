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
				this.listenTo(this.layout, 'user:sign:up', this.signUp)
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
			},

			getModalView: function(){
				return new View.ModalLayout();
			},

			getSuccessView: function(){
				return new View.Success();
			},

			signUp: function(){
				var modalTemplate = this.getModalView()
					options = {}
					options.header = false
					options.footer = false
					// model = {};

				require(['components/modal/modal_controller'], function(Modal){
					new Modal.Controller({contentView:modalTemplate , options: options});
				});

				this.listenTo(modalTemplate, 'data:sign:up', function(iv){
					//if verify password is correct
					if ( iv.view.ui.pword.val() == iv.view.ui.vpword.val() ) {
						App.request('username:static').signingUp(iv);

						var modalTemplate = this.getSuccessView();
						require(['components/modal/modal_controller'], function(Modal){
							new Modal.Controller({contentView:modalTemplate , options: options});
						});

						this.listenTo(modalTemplate, 'data:close', function(){
							_.delay(function(){
								modalTemplate.trigger('layout:destroy');
							}, 1500);
						});
					} else {
						console.log("wrong");
					}
				})
			}

		});

	});
	
	return App.LoginApp.Show;
		
});

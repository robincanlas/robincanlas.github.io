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

				this.listenTo(this.layout, 'user:login', this.userLogIn);
			},
			
			userLogIn: function(){
				var username = this.layout.ui.username.val();

				this.test = App.request('username:entities', {username: username});

				this.test.done(function(data){
					if ( data.length !== 0 ) { data.map(function(model){ App.vent.trigger('show:home:page', model); }); }
				});
				this.layout.destroy();
			},

			getLayoutView: function(){
				return new View.Layout();
			}

		});

	});
	
	return App.LoginApp.Show;
		
});

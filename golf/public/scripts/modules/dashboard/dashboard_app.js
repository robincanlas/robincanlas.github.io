define([
	'app',
	'entities/user',
], function(App){

		App.module('DashBoardApp', function(DashBoardApp, App, Backbone, Marionette, $, _){

		DashBoardApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'dashboard/:uri': 'show'
			}
		});
		
		var API = {
			show: function(uri, options){
				var controllerOptions = options || {};
				controllerOptions.id = this.getIdFromUri(uri);
				controllerOptions.uri = uri;

				this.user = App.request('login:test').checkId(controllerOptions.id);
				this.user.done(function(data){
					App.user.set(data.models[0].toJSON());
					App.user.trigger('show:nav');
				});

				require(['modules/dashboard/show/show_controller'], function(){
					new DashBoardApp.Show.Controller(controllerOptions);
				});
			},

			getIdFromUri: function(uri){
				return _.last(uri.split('-'));
			},
		};

		App.addInitializer(function(){
			new DashBoardApp.Router({
				controller: API
			});
		});

		App.vent.on("show:home:page", function(options){
			var username = options.get('username'),
				id = options.id;
			var uri = username + '-' + id;	
			Backbone.history.navigate('dashboard/'+uri);
			API.show(uri, {model: options});
		});

		App.commands.setHandler('count:load:region', function(options){
			API.loadCount(options);
		});

	});

	return App.DashBoard;
});
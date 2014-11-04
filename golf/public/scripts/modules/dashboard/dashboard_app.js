define([
	'app',	
], function(App){

		App.module('DashBoardApp', function(DashBoardApp, App, Backbone, Marionette, $, _){

		DashBoardApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'dashboard': 'show'
			}
		});
		
		var API = {
			show: function(uri, options){
				// var controllerOptions = options || {};
				// controllerOptions.id = this.getIdFromUri(uri);
				// controllerOptions.uri = uri;

				require(['modules/dashboard/show/show_controller'], function(){
					new DashBoardApp.Show.Controller();
				});

				// App.trigger('nav:active:change', '#schedule');
			},
			// loadCount: function(options){
			// 	require(['modules/dashboard/count/count_controller'], function(){
			// 		new DashBoardApp.Count.Controller(options);
			// 	});
			// },


			// getIdFromUri: function(uri){
			// 	return _.last(uri.split('-'));
			// },
		};

		App.addInitializer(function(){
			new DashBoardApp.Router({
				controller: API
			});
		});

		App.vent.on("show:home:page", function(){
			Backbone.history.navigate('dashboard');
			API.show();
		});

		App.commands.setHandler('count:load:region', function(options){
			API.loadCount(options);
		});

	});

	return App.DashBoard;
});
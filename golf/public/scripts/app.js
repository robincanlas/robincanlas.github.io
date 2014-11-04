define([
	'marionette',
	'config/settings'
], function(Marionette){

	var App = new Marionette.Application();

	App.addRegions({
		headerRegion: '#header-region',
		navRegion: '#nav-region',
		mainRegion:'#main-region',
		dialogRegion:'#dialog-region'
	});

	App.on('before:start', function(){
		require([
			'entities/user'
		], function(){
			App.user = App.request('username:static');
		});
	});

	App.addInitializer(function(){
		require([
			'modules/header/header_app',
			'modules/nav/nav_app'
			],  function(){	
			App.module("NavApp").start();
			App.module("HeaderApp").start();
		});
	});

	App.on('start', function() {
		require([
			'modules/schedule/schedule_app',
			'modules/nav/nav_app',
			'modules/dashboard/dashboard_app',
			// 'modules/calendar/calendar_app'
		], function(){
			Backbone.history.start();

			$(document).on('click', 'a:not([data-bypass])', function(e) {
				var href = $(this).attr('href');
				var protocol = this.protocol + '//';

				if (href.slice(protocol.length) !== protocol) {
					e.preventDefault();
					Backbone.history.navigate(href, true);
				}
			});

		});

	});	

	return App;
});
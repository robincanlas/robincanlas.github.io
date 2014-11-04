require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		backbone: '../bower_components/backbone/backbone',
		marionette: '../bower_components/marionette/lib/backbone.marionette',
		jquery: '../bower_components/jquery/dist/jquery',
		underscore: '../bower_components/lodash/dist/lodash',
		expanding: 'libs/expanding',
		text: '../bower_components/text/text'

	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	}
});

require(['app'], function(App){
	App.start();
});
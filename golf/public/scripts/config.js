(function(){
	var Config = {
		urlArgs: "bust=" + (new Date()).getTime(),
		paths: {
			backbone: '../bower_components/backbone/backbone',
			marionette: '../bower_components/marionette/lib/backbone.marionette',
			jquery: '../bower_components/jquery/dist/jquery',
        	underscore: '../bower_components/lodash/dist/lodash',
			text: '../bower_components/text/text',

		},
		shim: {
			backbone: {
				deps: ['jquery', 'underscore'],
				exports: 'Backbone'
			},
			marionette: {
				deps: ['backbone'],
				exports: 'Marionette'
			},
		}
	};

	// if (typeof _TEST_MODE !== 'undefined' && _TEST_MODE === true) {
	// 	Config.baseUrl = '../public/scripts';
	// 	require.config(Config);
	// 	return true;
	// }

	// If 'define' exists as a function, run main.
	if (typeof define === 'function') {
		Config.baseUrl = 'scripts';
		require.config(Config);
		require([
			'../runner'
		]);

		return true;
	}

	return Config;

})();
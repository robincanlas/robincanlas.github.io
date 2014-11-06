define([
	'app',
	'text!modules/nav/show/templates/layout.html'
], function(App, LayoutTemplate){

	App.module('NavApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Layout = Marionette.LayoutView.extend({
			serializeData: function(){
				var data = {};
				data =  _.partial(this.serializeModel, this.model).apply(this, arguments);
				data.id = this.model.id;

				return data;
			},
			template: LayoutTemplate,
			tagName: 'nav',
			className: 'window-height',
			templateHelpers: {
				uri: function(){
					if ( _.isUndefined(this.id)) {
						return ' '
					} else {
						return this.username + '-' + this.id;
					}
				}
			},
			triggers: {
				'click [data-dashboard]' : 'data:dashboard',
				'click [data-schedule]' : 'data:schedule'
			},
			modelEvents: {
				'change' : 'render'
			}
		});

	});

	return App.NavApp.Show;
});
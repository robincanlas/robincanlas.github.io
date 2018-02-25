define([
	"app",
	"text!modules/dashboard/day/templates/layout.html",
], function(App, LayoutTemplate){

	App.module("DayApp.Day", function(Day, App, Backbone, Marionette, $, _){

		Day.Layout = Marionette.LayoutView.extend({
			className: 'row day-module',
			template: LayoutTemplate,
			events: {
				"click [data-change]": "dayChange",
			},
			dayChange: function(e){
				var monthTrigger = $(e.currentTarget).data('change');
				this.trigger("day:change", monthTrigger);
			},
			modelEvents: {
				"change": "render"
			},
		});

	});

	return App.DayApp.Day;
});

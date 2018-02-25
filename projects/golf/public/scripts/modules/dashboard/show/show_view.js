define([
	"app",
	"text!modules/dashboard/show/templates/layout.html",
], function(App, LayoutTemplate){

	App.module("DashBoardApp.Show", function(Show, App, Backbone, Marionette, $, _){

		Show.Layout = Marionette.LayoutView.extend({
			className: 'row',
			template: LayoutTemplate,
			regions: {
				dayRegion: '#day-region',
				countRegion: '#reserve-count-region',
				nextRegion: '#reserve-next-region',
				courseRegion: '#course-region',
				scheduleRegion: '#small-schedule-region',
				calendarRegion: '#calendar-region'
			},
		});

	});

	return App.DashBoardApp.Show;
});

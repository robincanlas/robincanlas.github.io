define([
	'app',
	'modules/dashboard/schedule/schedule_view',
	'entities/reservation_parse',
	'entities/reservation',
	'entities/course'
], function(App, View){

		App.module('ScheduleApp.Schedule', function(Schedule, App, Backbone, Marionette, $, _){
	
			Schedule.Controller = Marionette.Controller.extend({
	
				initialize: function(options){
					var fetchedCourses = App.request('courses:entities');

					this.region = options.region;

					this.optionCollection = options.collection;

					var d = new Date();

					var time = ('0'+d.getHours()).slice(-2)+('0'+d.getMinutes()).slice(-2);
					
					var filteredCollection = _.first(options.collection.getReservationsByTime(d), 10);

					this.collection = App.request('reservation:entities:recreate:parse', {data:filteredCollection});

					this.collectionFilter();

					this.layout = this.getLayoutView();

					this.listenTo(this.layout, 'show', function(){
						this.reservationsRegion();							
					});

					this.region.show(this.layout);

					fetchedCourses.done(_.bind(function(courses){
						this.coursesCollection = courses;
						this.coursesRegion();
					}, this));

					this.listenTo(this.layout, 'childview:reserve:schedule', this.reserveSchedule)
				},

				reservationsRegion: function(){
					this.reservationsView = this.getReservationsView();
					// this.listenTo(this.reservationsView, 'childview:show:dialog', this.showDialog);
					this.layout.reservationsRegion.show(this.reservationsView);	
				},

				coursesRegion: function(){
					this.courses = this.getCourses();

					// this.listenTo(this.courses, 'childview:show:schedules', this.openSchedulePage);
					this.layout.coursesRegion.show(this.courses);
				},

				getLayoutView: function(){
					return new View.Layout();					
				},

				getReservationsView: function(){
					return new View.Reservations({collection: this.collection});					
				},

				getCourses: function(){
					return new View.Courses({collection: this.coursesCollection});
				},

				collectionFilter: function(){
					var collection = this.collection.scheduleFilter();
					// this.collection.reset(collection);
				},

			});
		
		});
	
		return App.ScheduleApp.Schedule;
});

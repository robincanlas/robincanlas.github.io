 define([
	'app',
	'modules/dashboard/show/show_view',
	'entities/date',
	'entities/reservation',
	'entities/reservation_parse',
	'entities/course'
], function(App, View){

		App.module('DashBoardApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
			Show.Controller = Marionette.Controller.extend({
	
				initialize: function(options){
					
					var data = {
						date: new Date(),
					}
					var fetchedCourses = App.request('courses:entities');
	
					this.date = new Date();
					this.courseId = 'fMQIT0ix52';
					this.id = options.id;
					this.dates = App.request('dates:entities:date');
					this.day = App.request('date:entity', data);
					this.reservations = App.request('reservation:entities', {date:this.day.get('date')});
					this.fetchCollection(this.day.get('date'));
					this.resetReservation();

					var currMonth = this.day.get('date').getMonth(),
						currDay = this.day.get('date').getDate(),
						currYear = this.day.get('date').getFullYear();

					this.layout = this.getLayoutView();
					this.listenTo(this.layout, 'show', function(){
						this.dayRegion();
						this.countRegion();
						this.nextRegion();
						// this.courseRegion();
						this.scheduleRegion();
						this.calendarRegion();
					});

					App.mainRegion.show(this.layout);

					this.listenTo(this.day, 'render:layout', function(options){
						this.fetchCollection(options.time);
						this.scheduleRegion();
						this.resetReservation();
					});

					fetchedCourses.done(_.bind(function(courses){
						this.courses = courses;
						this.courseRegion();
						this.listenTo(this.courses, 'change:course', this.changeCourse);
					}, this));

					// // TODO: Change time pass in next region according to date selected calendar
					App.commands.setHandler('change:reservation:date', _.bind(function(options){
						var month = options.model.get('month_name') || options.model.get('month') 
							day = options.model.get('exact_date') || options.model.get('day') 
							year = options.model.get('year');
						this.date = new Date(month + ' ' + day + ' ' + year);
						this.currDate = new Date((currMonth + 1) + ' ' + currDay + ' ' + currYear);
						if(+this.currDate === +this.date){ this.day.set('date', data.date); }
						this.renderDashboardPage(this.date);
						// to change schedules according to date selected
						this.scheduleRegion();	
					}, this));
				},

				renderDashboardPage: function(date){
					this.fetchCollection(date);
					this.reservations.reset(this.mapCollection());
					this.countRegion();
					this.nextRegion();
					this.resetReservation();						
				},

				changeCourse: function(iv){
					this.courseId = iv.model.id;
					this.renderDashboardPage(this.date);
					this.scheduleRegion();
				},

				fetchCollection: function(time){
					this.parseReservation = App.request('reservations:entities:full', {date:time, courseId:this.courseId});
				},

				resetReservation: function(){
					this.listenTo(this.parseReservation, 'change', function(){
						this.reservations.reset(this.mapCollection());
						this.countRegion();
						this.nextRegion();
					});
				},

				mapCollection: function(){
					return this.parseReservation.map(function(model){
						return model.attributes;
					});
				},

				dayRegion: function(){
					var options = {};
					options.region = this.layout.dayRegion;
					options.model = this.day;
					options.dates = this.dates;
					require(['modules/dashboard/day/day_controller'], function(Day){
						new Day.Controller(options);
					});
				},

				countRegion: function(){
					var options = {};
					options.collection = this.reservations;
					options.region = this.layout.countRegion;
					require(['modules/dashboard/count/count_controller'], function(Count){
						new Count.Controller(options);
					});
				},

				nextRegion: function(){
					var options = {};
					options.collection = this.reservations;
					options.region = this.layout.nextRegion;
					options.model = this.day;
					options.dates = this.dates;
					require(['modules/dashboard/next/next_controller'], function(Next){
						new Next.Controller(options);
					});
				},

				courseRegion: function(){
					var options = {};
					options.collection = this.courses;
					options.region = this.layout.courseRegion;
					require(['modules/dashboard/course/course_controller'], function(Course){
						new Course.Controller(options);
					});					
				},

				scheduleRegion: function(){
					var options = {};
					options.collection = this.parseReservation;
					options.region = this.layout.scheduleRegion;
					options.model = this.day;
					require(['modules/dashboard/schedule/schedule_controller'], function(Schedule){
						new Schedule.Controller(options);
					});
				},

				calendarRegion: function(){
					var options = {};
					options.region = this.layout.calendarRegion;
					options.model = this.dates;
					options.day = this.day;
					require(['modules/calendar/show/show_controller'], function(Show){
						new Show.Controller(options);
					});
				},

				getLayoutView: function(){
					return new View.Layout();					
				},

			});
		
		});
	
		return App.DashBoardApp.Show;
		
});
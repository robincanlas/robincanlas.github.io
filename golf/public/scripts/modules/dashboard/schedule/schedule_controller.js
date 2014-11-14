define([
	'app',
	'modules/dashboard/schedule/schedule_view',
	'entities/reservation_parse',
	'entities/reservation'
], function(App, View){

	App.module('ScheduleApp.Schedule', function(Schedule, App, Backbone, Marionette, $, _){

		Schedule.Controller = Marionette.Controller.extend({

			initialize: function(options){

				this.model = options.model;

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

				this.listenTo(this.layout, 'childview:reserve:schedule', this.reserveSchedule);
				this.listenTo(this.model, 'render:schedule:region', function(){
					this.reservationsRegion.render;
				});
			},

			reservationsRegion: function(){
				this.reservationsView = this.getReservationsView();
				this.layout.reservationsRegion.show(this.reservationsView);	
			},

			getLayoutView: function(){
				return new View.Layout();					
			},

			getReservationsView: function(){
				return new View.Reservations({collection: this.collection});					
			},


			collectionFilter: function(){
				var collection = this.collection.scheduleFilter();
				// this.collection.reset(collection);
			},

		});
	
	});
	
	return App.ScheduleApp.Schedule;
});

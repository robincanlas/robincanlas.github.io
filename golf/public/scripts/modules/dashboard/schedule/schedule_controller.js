define([
	'app',
	'modules/dashboard/schedule/schedule_view',
	'entities/reservation_parse',
	'entities/reservation'
], function(App, View){

		App.module('ScheduleApp.Schedule', function(Schedule, App, Backbone, Marionette, $, _){
	
			Schedule.Controller = Marionette.Controller.extend({
	
				initialize: function(options){
					this.optionCollection = options.collection;

					var d = new Date();

					var time = ('0'+d.getHours()).slice(-2)+('0'+d.getMinutes()).slice(-2);
					
					var filteredCollection = _.first(options.collection.getReservationsByTime(d), 10);

					this.collection = App.request('reservation:entities:recreate:parse', {data:filteredCollection});

					this.collectionFilter();
					this.layout = this.getLayoutView();
					options.region.show(this.layout);
					this.listenTo(this.layout, 'childview:reserve:schedule', this.reserveSchedule)
				},

				getLayoutView: function(){
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

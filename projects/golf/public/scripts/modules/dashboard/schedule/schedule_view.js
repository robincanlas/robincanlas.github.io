define([
	'app',
	'text!modules/dashboard/schedule/templates/layout.html',
	'text!modules/dashboard/schedule/templates/reservation.html',
	'text!modules/dashboard/schedule/templates/reservations.html'
], function(App, LayoutTemplate, ReservationTemplate, ReservationsTemplate){

	App.module('ScheduleApp.Schedule', function(Schedule, App, Backbone, Marionette, $, _){

		Schedule.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			className: 'schedule-module margin-top-0',
			regions: {
				reservationsRegion : '#reservations-region'
			}
		});

		Schedule.Reservation = Marionette.ItemView.extend({
			template: ReservationTemplate,
			className: 'schedule-module',
			templateHelpers: {
				openTime: function(){
					var parseDate = new Date(this.time.iso);	
					var hours = parseDate.getHours() < 10 ? ( '0' + parseDate.getHours() ) : parseDate.getHours();
					var minutes = parseDate.getMinutes() < 10 ? ( parseDate.getMinutes() + '0' ) : parseDate.getMinutes();
					var newTime = hours + ':' + minutes;
					return newTime;
				}
			}
		});

		Schedule.Reservations = Marionette.CompositeView.extend({
			template: ReservationsTemplate,
			childView: Schedule.Reservation,
			className: '',
			collectionEvents: {
				'change' : 'render'
			},
			onRender: function(){
				var pageHeight = $(document).height();
				$('.sidebar').css('height', pageHeight);
			}
		});

	});

	return App.ScheduleApp.Schedule;
});
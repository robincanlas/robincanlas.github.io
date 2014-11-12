define([
	'app',
	'text!modules/dashboard/schedule/templates/layout.html',
	'text!modules/dashboard/schedule/templates/reservation.html',
	'text!modules/dashboard/schedule/templates/reservations.html'
], function(App, LayoutTemplate, ReservationTemplate, ReservationsTemplate){

	App.module('ScheduleApp.Schedule', function(Schedule, App, Backbone, Marionette, $, _){

		Schedule.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			className: 'schedule-module',
			regions: {
				coursesRegion : '#courses-region',
				reservationsRegion : '#reservations-region'
			}
		});

		Schedule.Course = Marionette.ItemView.extend({
			template: _.template('<div data-reservation class="<%= defaultSelected()%> reservation-time cursor-pointer margin-0-auto border-radius-2"><%=holes%> holes</div>'),
			templateHelpers: {
				defaultSelected: function(){
					if(this.holes === 18) return 'background-green';
				}	
			},
			className: 'padding-10 cursor-pointer text-align-center',
			events: {
				'click [data-reservation]': 'showSchedules'
			},
			showSchedules: function(){
				$('.reservation-time').removeClass('background-green');
				this.$('.reservation-time').addClass('background-green');
				this.trigger('show:schedules', this);	
			},
			// modelEvents: {
			// 	'change:isSelected': 'render',
			// 	'change:isPaid': 'render'
			// }
		});

		Schedule.Courses = Marionette.CollectionView.extend({
			childView: Schedule.Course,
			className: 'display-inline-flex'
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

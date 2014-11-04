define([
	'app',
	'text!modules/schedule/list/templates/layout.html',
	'text!modules/schedule/list/templates/reservations.html',
	'text!modules/schedule/list/templates/modal.html'	
], function(App, LayoutTemplate, ReservationTemplate, ModalTemplate){

	App.module('ScheduleApp.List', function(List, App, Backbone, Marionette, $, _){

		List.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			tagName: 'main',
			className: 'text-align-center padding-15',
			regions: {
				coursesRegion : '#courses-region',
				reservationsRegion : '#reservations-region',
				calendarRegion: '#calendar-region'
			}
		});

		List.ModalTemplate = Marionette.ItemView.extend({
			template: ModalTemplate,
		});

		List.NoCourseSelectedTemplate = Marionette.ItemView.extend({
			template: _.template('<button data-close class="text-align-center">Please select a Golf Course first</button>'),
		});

		List.Course = Marionette.ItemView.extend({
			template: _.template('<div data-reservation class="reservation-time cursor-pointer margin-0-auto border-radius-2"><%=holes%> holes</div>'),
			className: 'padding-10 cursor-pointer text-align-center',
			events: {
				'click [data-reservation]': 'showSchedules'
			},
			showSchedules: function(){
				$('.reservation-time').removeClass('background-green');
				this.$('.reservation-time').addClass('background-green');
				this.trigger('show:schedules', this);	
			},
			modelEvents: {
				'change:isSelected': 'render',
				'change:isPaid': 'render'
			}
		});
		
		List.Courses = Marionette.CollectionView.extend({
			childView: List.Course,
			className: 'display-inline-flex'
		});		

		List.ReservationsItemView = Marionette.ItemView.extend({
			template: ReservationTemplate,
			className: 'text-align-center padding-0-10-10',
			templateHelpers: {
				timeOfReservation: function(){
					var parseDate = new Date(this.time.iso);	
					var hours = parseDate.getHours() < 10 ? ( '0' + parseDate.getHours() ) : parseDate.getHours();
					var minutes = parseDate.getMinutes() < 10 ? ( parseDate.getMinutes() + '0' ) : parseDate.getMinutes();
					var newTime = hours + ':' + minutes;
					return newTime;
				},
				changeBgColor: function(){
					if ( this.isReserved === true ) {
						return 'background-color: yellow;';						
					} else {
						return 'background: #82ca9c;';
					}
				},						
			},
			events: {
				'click [data-button]': 'showDialog'
			},
			showDialog: function(){					
				this.trigger('show:dialog', this);
			},
			modelEvents: {
				'change:isReserved':'render',
			},
		});
		
		List.ReservationsCollection = Marionette.CollectionView.extend({
			childView: List.ReservationsItemView,
			className: 'padding-15 margin-15 background-color-white main-content',
			onDomRefresh: function(){
				var pageHeight = $(document).height();
				$('.sidebar').css('height', pageHeight);
			},
			collectionEvents: {
				'change': 'render'
			}						
		});
	
	});

	return App.ScheduleApp.List;

});

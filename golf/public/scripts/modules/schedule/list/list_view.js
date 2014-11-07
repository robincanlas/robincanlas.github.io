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
			className: 'text-align-center padding-0-10-10',
			template: ModalTemplate,
			templateHelpers: {
				timeOfReservation: function(){
					var parseDate = new Date(this.time.iso);	
					var hours = parseDate.getHours() < 10 ? ( '0' + parseDate.getHours() ) : parseDate.getHours();
					var minutes = parseDate.getMinutes() < 10 ? ( parseDate.getMinutes() + '0' ) : parseDate.getMinutes();
					var newTime = hours + ':' + minutes;
					return newTime;
				},
				changeBgColor: function(){
					return this.isReserved ? 'background-color: yellow;' : 'background: #82ca9c;';
				},
				changeText: function(){
					return this.isReserved ? 'Reserved' : 'Book';
				},
				month: function(){
					var mos = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
						parseDate = new Date(this.time.iso);
					return mos[parseDate.getMonth()] + ' ' + parseDate.getDate();
				},
				day: function(){
					var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						parseDate = new Date(this.time.iso);
					return days[parseDate.getDay()];
				},
				holes: function(){
					return this.courseId === 'fMQIT0ix52' ? '18' : '9'
				},
			}						
		});

		List.AlreadyReservedTemplate = Marionette.ItemView.extend({
			className: 'padding-10 text-align-center',
			template: _.template('<button data-close class="">This time has already been reserved by another member.</button>'),
		});

		List.Course = Marionette.ItemView.extend({
			template: _.template('<div data-reservation class="border-box reservation-time cursor-pointer margin-0-auto border-radius-2 <%= defaultSelected()%>"><%=holes%> holes</div>'),
			className: 'padding-10 cursor-pointer text-align-center',
			events: {
				'click [data-reservation]': 'showSchedules'
			},
			templateHelpers: {
				defaultSelected: function(){
					if(this.holes === 18) return 'background-green';
				}	
			},
			showSchedules: function(){
				$('.reservation-time').removeClass('background-green');
				this.$('.reservation-time').addClass('background-green');
				$('.main-content').fadeOut(1000, _.bind(function(){
					this.trigger('show:schedules', this);						
				},this));
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

		List.Reservation = Marionette.ItemView.extend({
			template: ReservationTemplate,
			className: 'large-8 columns text-align-center padding-0-10-10',
			templateHelpers: {
				timeOfReservation: function(){
					var parseDate = new Date(this.time.iso);	
					var hours = parseDate.getHours() < 10 ? ( '0' + parseDate.getHours() ) : parseDate.getHours();
					var minutes = parseDate.getMinutes() < 10 ? ( parseDate.getMinutes() + '0' ) : parseDate.getMinutes();
					var newTime = hours + ':' + minutes;
					return newTime;
				},
				changeBgColor: function(){
					return this.isReserved ? 'background-color: yellow;' : 'background: #82ca9c;';
				},
				changeText: function(){
					return this.isReserved ? 'Reserved' : 'Book';
				},
				month: function(){
					var mos = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
						parseDate = new Date(this.time.iso);
					return mos[parseDate.getMonth()] + ' ' + parseDate.getDate();
				},
				day: function(){
					var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						parseDate = new Date(this.time.iso);
					return days[parseDate.getDay()];
				},
				holes: function(){
					return this.courseId === 'fMQIT0ix52' ? '18' : '9'
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
		
		List.Reservations = Marionette.CollectionView.extend({
			childView: List.Reservation,
			className: 'padding-15 margin-15 background-color-white main-content',
			onRender: function(){
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

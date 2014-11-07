define([
	'app',
	'modules/schedule/list/list_view',
	'components/modal/modal_controller',
	'entities/course',
	'entities/date',
	'entities/reservation_parse',
	'entities/user'
], function(App, View, Modal){

	App.module('ScheduleApp.List', function(List, App, Backbone, Marionette, $, _){

		List.Controller = Marionette.Controller.extend({

			initialize: function(options){
				var that = this;
					data = {
						date: new Date(),
					}

				var fetchedCourses = App.request('courses:entities');

				this.date = new Date();

				this.id = options.id;

				this.courseId = 'fMQIT0ix52';

				this.day = App.request('date:entity', data);

				this.dates = App.request('dates:entities:date');
			
				this.reservationCollection = App.request('reservations:entities:empty');

				this.emptyReservation = App.request('reservations:entity:empty');

				this.layout = this.getLayoutView();

				this.listenTo(this.layout, 'show', function(){
					this.calendarRegion();
				});

				App.mainRegion.show(this.layout);

				fetchedCourses.done(_.bind(function(courses){
					this.courses = courses;
					this.coursesRegion();
				}, this));

				App.commands.setHandler('change:reservation:date', _.bind(function(options){
					this.changeReservationDate(options.model);
				}, this));
			},

			// TODO: Set date when user selects a date on the calendar first
			// before choosing a golf course
			changeReservationDate: function(model){
				var month = model.get('month_name') 
					day = model.get('exact_date') 
					year = model.get('year');
				this.date = new Date(month + ' ' + day + ' ' + year);
				this.schedules = App.request('reservations:entities:full', {courseId:this.courseId, date:this.date});
				this.reservationsRegion();
			},

			openSchedulePage: function(iv){
				this.courseId = iv.model.id;
				this.schedules = App.request('reservations:entities:full', {courseId:this.courseId, date:this.date});
				this.reservationsRegion();
			},

			coursesRegion: function(){
				this.courses = this.getCourses();
				this.listenTo(this.courses, 'childview:show:schedules', this.openSchedulePage);
				this.layout.coursesRegion.show(this.courses);
			},

			reservationsRegion: function(){
				this.reservationsView = this.getReservationsView();
				this.listenTo(this.reservationsView, 'childview:show:dialog', this.showDialog);
				this.layout.reservationsRegion.show(this.reservationsView);	
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

			getReservationsView: function(){
				return new View.Reservations({collection: this.schedules});
			},	

			getCourses: function(){
				return new View.Courses({collection: this.courses});
			},

			getModalTemplate: function(model){
				return new View.ModalTemplate({model: model});
			},	

			getAlreadyReservedView: function(){
				return new View.AlreadyReservedTemplate();
			},

			showDialog: function(iv){
				var that = this,
					options = {};

				if(iv.model.get('memberId') === App.user.id || typeof iv.model.get('memberId') === 'undefined' ) { 
					var modalTemplate = this.getModalTemplate(iv.model);
						options.header = true;
						options.footer = true;
				}else{	 
					var modalTemplate = this.getAlreadyReservedView();
						options.header = false;
						options.footer = false;
				}	

				// save reservation
				this.listenTo(iv.model, 'save:reservation', function(){
					var time = iv.model.get('time')
						course = iv.model.get('courseId');

					this.emptyReservation.save({
						  courseId: {'__type':'Pointer','className':'Course','objectId':course},
						  memberId: {'__type':'Pointer','className':'User','objectId': App.user.id},
						  time: time
						}, {
						wait: true,
						success: function(model) {
							iv.model.set('isReserved', true);
							iv.model.set('objectId', model.id)
							that.emptyReservation = App.request('reservations:entity:empty');
						},
						error: function(model, error) {}
					});
				});

				// TODO: Move to entities file
				// remove reservation
				this.listenTo(iv.model, 'remove:reservation', function(){
					var id = iv.model.id;
					var test = Parse.Object.extend('Reservation');
					var query = new Parse.Query(test);
					query.get(id, {
						wait: true,
						success: function(model){
							model.destroy({
								wait: true,
								success: function(model){
									iv.model.set('isReserved', false); 
									that.stopListening(iv.model); 
								}
							});
						},
						error: function(model, error){}
					});
				});

				// TODO: Move to entities file
				// update if user is paid
				this.listenTo(iv.model, 'update:reservation', function(options){
					var paid = true;
					var id = iv.model.id;
					options.action === 'pay' ? paid = true : paid = false;

					var test1 = Parse.Object.extend('Reservation');
					var query1 = new Parse.Query(test1);
					query1.get(id, {
						wait: true,
						success: function(model){
							model.save({'isPaid': paid}, {
								wait: true,
								success: function(model){
									iv.model.set('isPaid', paid);
									that.stopListening(iv.model); 
								}
							});
						},
						error: function(model, error){}
					});

				});

				new Modal.Controller({contentView: modalTemplate , options: options, model: iv.model});

			},

		});
	
	});

	return App.ScheduleApp.List;

});

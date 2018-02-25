define([
	'app',
	'text!modules/dashboard/course/templates/layout.html',
], function(App, LayoutTemplate){

	App.module('CourseApp.Course', function(Course, App, Backbone, Marionette, $, _){

		Course.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			className: 'dashboard-module margin-57-0-0-0',
			regions: {
				coursesRegion : '#courses-region'
			},
		});

		Course.Course = Marionette.ItemView.extend({
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
		});

		Course.Courses = Marionette.CollectionView.extend({
			childView: Course.Course,
			className: 'display-inline-flex'
		});		

	});

	return App.CourseApp.Course;

});

define([
	'app',	
	'modules/dashboard/course/course_view',
], function(App, View){

	App.module('CourseApp.Course', function(Course, App, Backbone, Marionette, $, _){

		Course.Controller = Marionette.Controller.extend({
		
			initialize: function(options){
				this.collection = options.collection;
				
				this.region = options.region;

				this.layout = this.getLayoutView();

				this.listenTo(this.layout, 'show', function(){
					this.coursesRegion();
				});

				this.region.show(this.layout);
			},

			openSchedulePage: function(iv){
				this.collection.trigger('change:course', {model: iv.model});
			},

			coursesRegion: function(){
				this.courses = this.getCourses();
				this.listenTo(this.courses, 'childview:show:schedules', this.openSchedulePage);
				this.layout.coursesRegion.show(this.courses);
			},

			getCourses: function(){
				return new View.Courses({collection: this.collection});
			},

			getLayoutView: function(){
				return new View.Layout();
			},
		
		});
			
	});

	return App.CourseApp.Course;

});

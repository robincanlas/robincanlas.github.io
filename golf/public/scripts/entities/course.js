define(["app"], function(App){

	App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){

		Entities.Course = Parse.Object.extend({
			className: 'Course'
		});

		Entities.CoursesCollection = Parse.Collection.extend({
			model: Entities.Course,
		});
	
		var API = {
	
			getCourses: function(){
				var query = new Parse.Query(Entities.Course)
					.include('clubId');
					// query.get("DyVlZj5oQe", {
					// 	success: function(model){
					// 		model.destroy({
					// 			wait: true,
					// 			success: function(model){

					// 			}
					// 		});
					// 	}
					// });
				var courses = query.collection();
				var defer = $.Deferred();
				courses.fetch({
					success: function(data){
						// console.log(data);
						defer.resolve(data);
					}
				});
				return defer.promise();
			},

		};
	
		App.reqres.setHandler("courses:entity", function(){
		});

		App.reqres.setHandler("courses:entities", function(){
			return API.getCourses();		
		});
	
	});

	return App.Entities;

});

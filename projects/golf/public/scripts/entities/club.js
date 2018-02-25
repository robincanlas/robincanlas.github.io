define(["app"], function(App){

	App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){

		Entities.Test = Parse.Object.extend({
			className: 'Reservation'
		});

		Entities.TestsCollection = Parse.Collection.extend({
			model: Entities.Test,
		});
	
		var API = {
	
			test: function(){
				var query = new Parse.Query(Entities.Test)
					// .include('courseId');
				var x = query.collection();
				x.fetch();
				console.log(x);
			},

		};
	
		App.reqres.setHandler("reservations:entity", function(){
		});

		App.reqres.setHandler("test:entities", function(){
			return API.test();		
		});
	
	});

	return App.Entities;

});

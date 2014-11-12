define(["app"], function(App){

	App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){

		// Todo - Merge Day Model w/ Date
		Entities.Day = Backbone.Model.extend({
			initialize: function(options){
				var date = options.date || new Date();

				this.setDate(date);
			},

			shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			longDayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			longMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

			defaults: {
				isSelected: false,
			},
			setDate: function(date){
				this.set({
					dayName: this.getDayName(date.getDay()),
					day: date.getDate(),
					month:  this.getMonthName(date.getMonth()),
					year: date.getFullYear(),
					date: date
				});
			},

			changeDay: function(value){
				var date = this.get("date");
				date.setDate(date.getDate()+value);

				this.setDate(date);				
			},

			changeDayCalendar: function(options){
				var model = options.model
					date = new Date(model.get('year'), model.get('number_of_month'), model.get('exact_date'))

				this.setDate(date);
			},

			getDayName: function(dayNumber){
				return this.longDayNames[dayNumber];
			},

			getMonthName: function(monthNumber){
				return this.longMonthNames[monthNumber];
			},
		});

		Entities.Date = Backbone.Model.extend({
			defaults: {
				isSelected: false,
			},
		});

		Entities.DateCollection = Backbone.Collection.extend({
			model: Entities.Date
		});

		var API = {
			getDate: function(options){
				var day = new Entities.Day(options);

				return day;
			},

			getComponent: function(){
				var date = new Entities.Date({
					date: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
					day: ["Sun", "Mon", "Tue" , "Wed", "Thu", "Fri", "Sat"],
					month: ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]
				});

				return date;
			},

			newEmptyDate: function(){
				var emptyDate = new Entities.Date();

				return emptyDate;
			},

		};

		/*
		Handler should follow the form:
		date:entity:name:of:request if we're requesting a model
								-or-
		date:entities:name:of:request if we're requesting a collection
		*/

		App.reqres.setHandler("dates:entities:date", function(){
			return API.getComponent();
		});

		App.reqres.setHandler("dates:entities:emptyMonth", function(){
			return API.newEmptyDate();
		});

		App.reqres.setHandler("date:entity", function(options){
			return API.getDate(options);
		});

	});

	return;
});
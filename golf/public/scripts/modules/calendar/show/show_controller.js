define([
	"app",
	"modules/calendar/show/show_view", 
	"entities/date"
], function(App, View){

	App.module("CalendarApp.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Controller = Marionette.Controller.extend({
			initialize: function(options){
				this.layout = this.getLayoutView();

				this.day = options.day;

				this.dates = options.model;

				this.date = new Date();
				this.getMonths();
				this.numberOfDays();

				this.listenTo(this.layout, "show", function(){
					this.calendarHead();
					this.calendarBody();
				});
				
				options.region.show(this.layout);
			},

			getLayoutView: function(){
				return new View.Layout();
			},

			getMonthsView:function(){
				return new View.Calendar({model:this.dates});
			},

			getDatesView:function(){
				return new View.Date({model:this.dates});
			},

			calendarHead: function(){
				var headerView = this.getMonthsView();
				this.layout.calendarHead.show(headerView);

				this.listenTo(headerView, "calendar:month:change", this.triggerMonth);
			},

			calendarBody: function() {
				this.bodyView = this.getDatesView();
				this.layout.calendarBody.show(this.bodyView);

				this.listenTo(this.bodyView, 'calendar:date', this.numberOfDays)
			},

			//get current month
			getMonths: function() {
				var days = this.dates.get("day")[this.date.getDay()];
				var pick = this.dates.get('month')[this.date.getMonth()];

				this.dates.set({
					month_name: pick,
					year: this.date.getFullYear(),
					exact_date: this.date.getDate(),
					number_of_month: this.date.getMonth(),
					isSelected: true,
					exact_month: this.date.getMonth(),
				});
			},

			//setting of number of days and indention
			numberOfDays: function(options) {
				var data = options || {};
				var exact_date =  data.date || this.dates.get('exact_date');

				var no_of_indent = new Date(this.dates.get('year'), this.dates.get('number_of_month'),1).getDay();
				var no_of_day = this.dates.get('date')[this.date.getMonth()];

				this.dates.set({
					no_of_day: no_of_day,
					no_of_indent: no_of_indent,
					exact_date: exact_date
				});

				if ( data.date ) {
					this.day.changeDayCalendar(options.model)
				}
		
				App.execute('change:reservation:date', {model: this.dates} );
			},

			//changing of months
			triggerMonth: function(integer, model) {

				var date = this.day.get('date')
					newMonth = date.getMonth() + integer
					year = date.getFullYear();
				//if month is Max or Min reset
				switch ( newMonth )	{
					case 12:
						newMonth = 0;
					break;
					case -1:
						newMonth = 11;
					break;
				}

				//if month is change exact date is change
				switch ( model.get('exact_month') == newMonth ) {
					case true:
						var exact_date = date.getDate();
					break;
					case false:
						var exact_date = 1;
					break;
				}

				this.dates.set({
					month_name: this.dates.get("month")[newMonth],
					year: this.day.get('date').getFullYear(),
					number_of_month: newMonth,
					exact_date: exact_date,
				});

				// if Dec or Jan was hit change year
				switch ( model.get('month_name') ) {
					case 'Dec':
						var number = model.get('number_of_month') + integer;
						var month = date.setMonth(number);
					break;
					case 'Jan':
						var number = model.get('number_of_month') + integer;
						var month = date.setMonth(number);
					break;
				}

				date.setMonth(newMonth);
				this.numberOfDays({integer: integer});
			},

		});
	});
	return App.CalendarApp.Show;
});
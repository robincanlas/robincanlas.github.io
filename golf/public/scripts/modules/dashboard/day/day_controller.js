define([
	"app",
	"modules/dashboard/day/day_view",
], function(App, View){
	App.module("DayApp.Day", function(Day, App, Backbone, Marionette, $, _){

		Day.Controller = Marionette.Controller.extend({

			initialize: function(options){
				this.model = options.model;
				this.dates = options.dates;

				this.layout = this.getLayoutView();
				options.region.show(this.layout);
				
				this.listenTo(this.layout, "day:change", this.changeDay);
			},

			getLayoutView: function(){
				return new View.Layout({model: this.model});					
			},

			changeDay: function(integer){

				this.model.changeDay(integer);
				var date = this.model.get('date')
					month = this.dates;
					no_of_indent = new Date(date.getFullYear(), date.getMonth(),1).getDay();

				month.set({
					exact_date: date.getDate(),
					number_of_month: date.getMonth(),
					exact_month: date.getMonth(),
					month_name: month.get('month')[date.getMonth()],
					no_of_day: month.get('date')[date.getMonth()],
					no_of_indent: no_of_indent
				});
				App.execute('change:reservation:date', {model: this.dates} );
			}
		});
	});
	return App.DayApp.Day;
});

define([
	'app',
	'modules/dashboard/count/count_view',
], function(App, View){

		App.module('DashBoardApp.Count', function(Count, App, Backbone, Marionette, $, _){
	
			Count.Controller = Marionette.Controller.extend({
	
				initialize: function(options){
					this.collection = options.collection;	

					this.region = options.region;

					this.layout = this.getLayoutView();
					this.region.show(this.layout);

				},

				getLayoutView: function(){
					return new View.Layout({collection:this.collection});					
				},

			});
		
		});
	
		return App.DashBoardApp.Count;
		
});

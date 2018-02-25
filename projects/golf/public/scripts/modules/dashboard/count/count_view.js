define([
	"app",
	"text!modules/dashboard/count/templates/layout.html",
], function(App, LayoutTemplate){

	App.module("CountApp.Count", function(Count, App, Backbone, Marionette, $, _){

		Count.Layout = Marionette.LayoutView.extend({
			collectionEvents: {
				'change:isReserved' : 'render'
			},
			className: 'row schedule-module',
			template: LayoutTemplate,
			serializeData: function(){
				return {
					reservationCount: this.collection.countReservations(),
					availableCount: this.collection.countAvailableReservations(),
				}
			}
		});

	});

	return App.CountApp.Count;
});

define([
	"app",
	"modules/nav/show/show_view"
], function(App, View){

	App.module("NavApp.Show", function(Show, App, Backbone, Marionette, $, _){
	
		Show.Controller = Marionette.Controller.extend({
			initialize: function(){
				this.user = App.user;

				this.layout = this.getLayout();

				this.listenTo(this.user, 'change', function(){
					App.navRegion.show(this.layout);
				});
				
				this.listenTo(App, "nav:active:change", this.changeActive);
				this.listenTo(this.layout, 'data:dashboard', this.dashboard);
				this.listenTo(this.layout, 'data:schedule', this.schedule);
			},

			getLayout: function(){
				return new View.Layout({model:this.user});
			},

			changeActive: function(route){
				this.layout.$(".isActive").removeClass("isActive");
				this.layout.$(route).addClass("isActive");
			},

			dashboard: function(){
				App.vent.trigger('show:home:page');
			},

			schedule: function(){
				App.vent.trigger('show:schedule:page');
			}

		});

	});

	return App.NavApp.Show;
});
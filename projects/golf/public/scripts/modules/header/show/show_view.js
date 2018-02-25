define([
	"app",
	"text!modules/header/show/templates/layout.html"
], function(App, LayoutTemplate){

	App.module("HeaderApp.Show", function(Show, App, Backbone, Marionette, $, _){
	
		Show.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			className: "header"
		});

	});

	return App.HeaderApp.Show;
});
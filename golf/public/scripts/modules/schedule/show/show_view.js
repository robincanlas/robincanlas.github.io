define([
	"app",
	"text!apps/schedule/show/templates/layout.html",
	"text!apps/schedule/show/templates/dialog.html"		
], function(App, LayoutTemplate, DialogTemplate){

	App.module("ScheduleApp.Show", function(Show, App, Backbone, Marionette, $, _){

		Show.Layout = Marionette.Layout.extend({
			template: LayoutTemplate,
			className: "dialog-box",
			regions:{
				modalRegion: "#modal-region"
			}
		});

		Show.DialogItemView = Marionette.ItemView.extend({
			template: DialogTemplate,
			events: {
				"click [data-cancel]": "exitDialog",
				"click [data-save]": "saveDialog",
				"click [data-unpaid]": "removePaid",
				"click [data-1]": "guestOne",
				"click [data-2]": "guestTwo",
				"click [data-3]": "guestThree",
				// "mouseover [data-save]": "expand",
				// "mouseout [data-save]": "shrink",
				"keydown [data-name]": "validateName",
			},
			exitDialog: function(){
				this.trigger("close:dialog");
				$("body").removeClass("body-color");
				$("#header-region").removeClass("scale margin");
				$("#nav-region").removeClass("scale");
				$("#main-region").removeClass("scale");								
				console.log("close dialog");
			},
			saveDialog: function(){
				this.trigger("save:dialog");								
				console.log("save dialog");
			},
			guestOne: function(){
				$("#guest-count").html(1);
				$("#button-1").addClass("buttons");
				$("#button-2").removeClass("buttons");
				$("#button-3").removeClass("buttons");
			},
			guestTwo: function(){
				$("#guest-count").html(2);
				$("#button-1").removeClass("buttons");				
				$("#button-2").addClass("buttons");		
				$("#button-3").removeClass("buttons");						
			},
			guestThree: function(){
				$("#guest-count").html(3);
				$("#button-1").removeClass("buttons");				
				$("#button-2").removeClass("buttons");		
				$("#button-3").addClass("buttons");				
			},
			expand: function(){
				this.$(".save").addClass("button-expand");
			},
			shrink: function(){
				this.$(".save").removeClass("button-expand");
			},
			validateName: function(){
				var name = $("#full-name").val().length
				if ( name > 6) {	
					$("#alert").addClass("valid");
					$("#alert").removeClass("error");					
					$("#alert").html("What a nice Name!");
				}else{
					$("#alert").addClass("error");
					$("#alert").removeClass("valid");					
					$("#alert").html("Name must be 7 characters");					
				}
			},
			removePaid: function(){
				this.trigger("remove:paid");
			}						
		});

	});

	return App.ScheduleApp.Show;

});

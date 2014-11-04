define([
	"app",
	"apps/schedule/show/show_view",
], function(App, View){

		App.module("ScheduleApp.Show", function(Show, App, Backbone, Marionette, $, _){
	
			Show.Controller = Marionette.Controller.extend({
	
				initialize: function(options){

					// console.log(options);					
	
					this.layout = this.getLayoutView();
	
					this.listenTo(this.layout, "show", function(){
						this.modalRegion(options);
					});
	
					App.dialogRegion.show(this.layout);
					$(".modal-box").addClass("show-dialog");

					this.listenTo(this.modalView, "close:dialog", function(){
						this.layout.close();
					});

					this.listenTo(this.modalView, "remove:paid", function(){	
						// var count = "";
						// var name = "";
							options.model.set("isBooked", false);
							options.model.set("guestCount", "");
							options.model.set("fullName", "");
							$("body").removeClass("body-color");
							$("#header-region").removeClass("scale margin");
							$("#nav-region").removeClass("scale");
							$("#main-region").removeClass("scale");								
							this.layout.close();																																
					});
					this.listenTo(this.modalView, "save:dialog", function(){											
						console.log(options);
						var count = $("#guest-count").html();
						var name = $("#full-name").val();
							if (name.length >= 7){
								options.model.set("fullName", name);
								options.model.set("guestCount", count);
								options.model.set("isBooked", true);
								$("body").removeClass("body-color");
								$("#header-region").removeClass("scale margin");
								$("#nav-region").removeClass("scale");
								$("#main-region").removeClass("scale");								
								this.layout.close();
							}else{
								$("#alert").addClass("error");
								$("#alert").html("Name is too short");
							}
					});

				},

				modalRegion: function(options){
					console.log(options.model.get("guestCount"));
					console.log("modal region working");			
					this.modalView = this.getModalView(options);
					this.layout.modalRegion.show(this.modalView);
					var booked = options.model.get("isBooked");
						if( booked == true){
							$(".time").addClass("red");
							$(".unpaid").removeClass("display");
						}else{
							$(".time").addClass("green");
						}

					var time = options.model.get("time");
					var name = options.model.get("fullName");
					var guest = options.model.get("guestCount");
						$("#data-time").html(time);
						$("#full-name").val(name);

						switch (guest){
							case '1' : 
								$("#button-1").css("background", "#82ca9c");
								$("#button-1").addClass("blinker");
								break;
							case '2':
								$("#button-2").css("background", "#82ca9c");
								$("#button-2").addClass("blinker");											
								break;	
							case '3':
								$("#button-3").css("background", "#82ca9c");
								$("#button-3").addClass("blinker");
								break;
						}
				},

				getLayoutView: function(){
					console.log("show dialog layout");
					return new View.Layout();					
				},

				getModalView: function(){
					console.log("getmodalview working");					
					return new View.DialogItemView();
				},

				// removePaid: function(iv){
				// 	console.log(iv.model.get("guestCount"));
				// 	console.log("removePaid");
				// }
	
			});
		
		});
	
		return App.ScheduleApp.Show;
		
});

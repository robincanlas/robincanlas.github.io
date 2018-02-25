define([
	'app',
	'text!modules/dashboard/next/templates/layout.html',
], function(App, LayoutTemplate){

	App.module('NextApp.Next', function(Next, App, Backbone, Marionette, $, _){

		Next.Layout = Marionette.LayoutView.extend({
			className: 'row next-module',
			template: LayoutTemplate,
			templateHelpers: {
				timeToNextFlight: function(){
					var d = new Date(),
						dHours = ('0'+d.getHours()).slice(-2),
						dMinutes = ('0'+d.getMinutes()).slice(-2),
						time = dHours+dMinutes;

					if ( this.nextAvailableReservation === 'Tomorrow') {
						return 'Tomorrow';
					}

					if ( Number(time)+15 > this.nextAvailableReservation ) {
						return 'NOW';
					} else {
						var x = ( this.nextAvailableReservation.slice(0,2) - dHours ) * 60 + ( this.nextAvailableReservation.slice(3) - dMinutes );
						if (x < 1){
							return 'N/A';
						}else{
							return x > 1 ? x + ' minutes' : x + ' minute';
						}
					}
				}
			},
			serializeData: function(){
				if(typeof this.model !== 'undefined'){
					var parseDate = this.model.get('time'),	
						hours = parseDate.getHours() < 10 ? ( '0' + parseDate.getHours() ) : parseDate.getHours(),
						minutes = parseDate.getMinutes() < 10 ? ( parseDate.getMinutes() + '0' ) : parseDate.getMinutes(),
						newTime = hours + ':' + minutes;
				}		
				return {
					nextAvailableReservation: (typeof this.model === 'undefined') ? 'Tomorrow' : newTime,
				}
			},
			triggers: {
				'click .btn': 'save:next:reservation'
			},
			modelEvents: {
				'change' : 'render'
			},
			collectionEvents: {
				'change' : 'render'
			}
		});

	});

	return App.NextApp.Next;
});

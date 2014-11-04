define([
	'app',
	'modules/dashboard/next/next_view',
	'entities/reservation',
	'entities/reservation_parse'
], function(App, View){

	App.module('NextApp.Next', function(Next, App, Backbone, Marionette, $, _){

		Next.Controller = Marionette.Controller.extend({

			initialize: function(options){
				this.collection = options.collection;
				this.cloneCollection = _.clone(this.collection)

				this.model = options.model;
				this.dates = options.dates;

				this.emptyReservation = App.request('reservations:entity:empty');

				this.nextReservation = this.collection.getNextReservation(this.model.get('date'));
				
				this.layout = this.getLayoutView();
				options.region.show(this.layout);

				this.listenTo(this.layout, 'save:next:reservation', this.saveReservation);
			},

			getLayoutView: function(){
				return new View.Layout({
					model: this.nextReservation,
					collection:this.collection
				});					
			},

			getCurrentTime: function(){
				var d = this.model.get('date'),
					time = ('0'+d.getHours()).slice(-2)+('0'+d.getMinutes()).slice(-2);

				return time;
			},

			saveReservation: function(iv){
				var time = iv.model.get('time');
					course = iv.model.get('courseId');
					that = this;

				this.emptyReservation.save({
					  courseId: {'__type':'Pointer','className':'Course','objectId':'fMQIT0ix52'},
					  memberId: {'__type':'Pointer','className':'User','objectId': 'gK63TY0vdZ'},
					  time: time
					}, {
					wait: true,
					success: function(model) {
						iv.model.set('isReserved', true);
						iv.model.set('objectId', model.id);
						that.model.trigger('render:layout', {time:time});
						that.emptyReservation = App.request('reservations:entity:empty');
					},
					error: function(model, error) {}
				});
			},

		});
	
	});

	return App.NextApp.Next;
		
});

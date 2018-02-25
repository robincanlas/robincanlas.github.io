var Search = Backbone.Marionette.ItemView.extend({
	template: '#search',
	ui: {
		input: 'input',
		select: 'select'
	},
	events: {
		'keyup': 'enter'
	},
	enter: function(e){
		if ( e.keyCode === 13 ) {
			this.trigger('search:movie');
		}
	}
});
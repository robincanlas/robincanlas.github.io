var Movie = Backbone.Marionette.ItemView.extend({
	template: '#movies',
	// tagName: 'li ',
	className: '',
	events: {
		'click': 'showVideo'
	},
	showVideo: function(){
		this.trigger('show:video', this);
	}
});

var Movies = Backbone.Marionette.CollectionView.extend({
	childView: Movie,
	// tagName: 'ul',
	className: ''
});
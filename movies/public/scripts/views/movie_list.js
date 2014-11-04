var Movie = Backbone.Marionette.ItemView.extend({
	template: '#movies',
	className: 'large-6 columns',
	events: {
		'click': 'showDetails'
	},
	showDetails: function(){
		this.trigger('show:details', this);
	},
});

var Movies = Backbone.Marionette.CollectionView.extend({
	childView: Movie,
	className: 'row'
});
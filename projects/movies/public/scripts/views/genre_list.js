var Genre = Backbone.Marionette.ItemView.extend({
	template: '#genre',
	className: 'large-3 columns',
	events:{
		'click': 'filter'
	},
	filter: function(){
		this.trigger('filter:by:genre', this);
	}
});

var Genres = Backbone.Marionette.CollectionView.extend({
	childView: Genre,
	className: 'row',
});
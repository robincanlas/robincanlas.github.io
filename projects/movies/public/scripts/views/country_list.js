var Country = Backbone.Marionette.ItemView.extend({
	template: '#countries',
	className: 'large-12 columns',
	events:{
		'click': 'filter'
	},
	filter: function(){
		this.trigger('filter:by:country', this);
	}
});

var CountriesCollection = Backbone.Marionette.CollectionView.extend({
	childView: Country,
	className: 'row',
});
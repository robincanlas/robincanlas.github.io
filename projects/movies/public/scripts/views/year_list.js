var YearView = Backbone.Marionette.ItemView.extend({
	template: '#year',
	className: 'large-3 columns',
	events: {
		'click': 'showByYear'
	},
	showByYear: function(){
		this.trigger('filter:by:year', this);
	}
});

var YearsView = Backbone.Marionette.CollectionView.extend({
	childView: YearView,
	className: 'row',
});
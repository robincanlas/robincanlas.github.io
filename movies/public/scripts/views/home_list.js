var HomeLayout = Backbone.Marionette.LayoutView.extend({
	template: '#home-layout',
	className: 'border-radius-2 bg-color-48-48-48',
	regions: {
		cinemaRegion: '#cinema-region',
		featuredRegion: '#featured-region'
	},
});

var Cinema = Backbone.Marionette.ItemView.extend({
	template: '#cinema',
	className: 'large-6 columns',
	events: {
		'click': 'showDetails'
	},
	showDetails: function(){
		this.trigger('show:details', this);
	},
});

var Cinemas = Backbone.Marionette.CollectionView.extend({
	childView: Cinema,
	className: 'row',
});

var Featured = Backbone.Marionette.ItemView.extend({
	template: '#featured',
	className: 'large-6 columns',
	events: {
		'click': 'showDetails'
	},
	showDetails: function(){
		this.trigger('show:details', this);
	}
});

var Featureds = Backbone.Marionette.CollectionView.extend({
	childView: Featured,
	className: 'row'
});
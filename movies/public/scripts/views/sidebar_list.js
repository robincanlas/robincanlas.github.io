var Name = Backbone.Marionette.ItemView.extend({
	template: '#sidebar',
	tagName: 'li',
	className: 'sidebar-content list-style-type-none padding-10-0-10-30 cursor-pointer border-bottom-37 font-size-11',
	events:{
		'click [data-genres]':'showGenres'
	},
	showGenres: function(){
		this.trigger('show:genres', this);
	}
});

var Names = Backbone.Marionette.CollectionView.extend({
	childView: Name,
	tagName: 'ul',
	className: 'padding-0 margin-0 font-family-verdana color-ccc'
});
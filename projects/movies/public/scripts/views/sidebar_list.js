var Name = Backbone.Marionette.ItemView.extend({
	template: '#sidebar',
	tagName: 'li',
	className: 'sidebar-content list-style-type-none padding-10-0-10-30 cursor-pointer border-bottom-37 font-size-11',
	events:{
		'click':'showGenres'
	},
	showGenres: function(){
		var id = this.model.get('id');
		switch(id){
			case 1:
				this.trigger('show:home', this);
				break;
			case 2:
				this.trigger('show:movies', this);
				break;
			case 3:
				this.trigger('show:genres', this);
				break;
			case 4:
				this.trigger('show:cinema', this);
				break;
			case 5:
				this.trigger('show:featured', this);
				break;
			case 6:
				this.trigger('show:years', this);
				break;
			case 7:
				this.trigger('show:countries', this);
				break;
			case 8:
				this.trigger('show:languages', this);
		}
	}
});

var Names = Backbone.Marionette.CollectionView.extend({
	childView: Name,
	tagName: 'ul',
	className: 'padding-0 margin-0 font-family-verdana color-ccc'
});
var genres = Backbone.Collection.extend({
	model: genre
});

var genresCollection = new genres([
	{name: 'Action', data:'data-action', id:'1'},
	{name: 'Horror', data:'data-horror', id:'2'},
	{name: 'Sci-Fi', data:'data-comedy', id:'3'},
	{name: 'Thriller', data:'data-thriller',id:'4'},
	{name: 'Adventure', data:'data-adventure',id:'5'},
	{name: 'Animation', data:'data-animation',id:'6'},
	{name: 'Comedy', data:'data-sci-fi',id:'7'},				
	{name: 'War', data:'data-war',id:'8'},
]);
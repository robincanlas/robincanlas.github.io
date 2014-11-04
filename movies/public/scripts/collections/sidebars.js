var Sidebars = Backbone.Collection.extend({
	model: sidebar
});

var sidebars = new Sidebars([
	{name: 'Home', data:'data-home', id:1},
	{name: 'Movies', data:'data-movies', id:2},
	{name: 'Genres', data:'data-genres', id:3},
	{name: 'Cinema', data:'data-cinema', id:4},
	{name: 'Featured', data:'data-featured', id:5},
	{name: 'Years', data:'data-years', id:6},
	{name: 'Countries', data:'data-countries', id:7},				
	{name: 'Languages', data:'data-languages', id:8},
]);
var Countries = Backbone.Collection.extend({
	model: country
});

var countryCollection = new Countries([
	{name: 'United States', data:'data-us', id:'1'},
	{name: 'United Kingdom', data:'data-uk', id:'2'},
	{name: 'Japan', data:'data-jp', id:'3'}
]);

var Empty = Backbone.Collection.extend({
	model: country
});
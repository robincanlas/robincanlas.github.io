var Languages = Backbone.Collection.extend({
	model: language
});

var languageCollection = new Countries([
	{name: 'English', data:'data-us-lng', id:'1'},
	{name: 'Japanese', data:'data-uk-lng', id:'2'},
]);
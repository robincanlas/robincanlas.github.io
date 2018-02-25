var moviesCollection = Parse.Collection.extend({
	model: movie
});

var informations = Parse.Collection.extend({
	model: information
});

var query = new Parse.Query(movie)
	.descending('createdAt')
	.include('test');
var movies = query.collection();
var defer = $.Deferred();
movies.fetch();

// FEATURED
var featuredMoviesHome = new Parse.Query(movie)
	.descending('createdAt')
	.equalTo('cinema_id', 0)
	.limit(8)
	.include('test');
var featuredMoviesHome = featuredMoviesHome.collection();
featuredMoviesHome.fetch();

// CINEMA
var cinemaMoviesHome = new Parse.Query(movie)
	.descending('createdAt')
	.equalTo('cinema_id', 1)
	.limit(8)
	.include('test');
var cinemaMoviesHome = cinemaMoviesHome.collection();
cinemaMoviesHome.fetch();
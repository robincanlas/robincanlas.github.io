var moviesCollection = Parse.Collection.extend({
	model: movie
});

var query = new Parse.Query(movie);
query.descending('createdAt');
var movies = query.collection();
var defer = $.Deferred();
movies.fetch({
	success: function(data){
		defer.resolve(data);
	}
});

var fetchedMovies = defer.promise();
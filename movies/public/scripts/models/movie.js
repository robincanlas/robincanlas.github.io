var movie = Parse.Object.extend({
	className: 'movie',
});

var information = Parse.Object.extend({
	className: 'information',
});

// For Reference
// var Movie = Parse.Object.extend("movie");
// var Information = Parse.Object.extend("information");
// var innerQuery = new Parse.Query(Information);
// innerQuery.equalTo("director", "Wes Craven");
// var query = new Parse.Query(Movie);
// query.matchesQuery("test", innerQuery);
// query.find({
//   success: function(x) {
//   	console.log(x);
//   }
// });
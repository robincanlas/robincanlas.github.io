var Actors = Parse.Collection.extend({
	model: actor
});

// var test = new Parse.Query(actor)
// 	.descending('createdAt')
// 	.include('films')
// 	.matches('name', 'Robert Englund');
// var fetchActors = test.collection();
// var defer = $.Deferred();
// fetchActors.fetch({
// 	success: function(data){
// 		defer.resolve(data);
// 	}
// });

// var x = defer.promise();
// $.when(x).done(function(data){
// 	data.map(function(model){
// 		var x = model.get('films');
// 		x.map(function(films){
// 			console.log(films.toJSON());
// 		})
// 	});
// });

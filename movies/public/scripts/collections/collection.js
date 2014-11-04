

//information collection
var informationCollection = Parse.Collection.extend({
	model: information
});

var query = new Parse.Query(information);
query.descending('createdAt');
var informations = query.collection();
informations.fetch();
// console.log(informations);
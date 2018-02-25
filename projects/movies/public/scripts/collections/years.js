var Years = Backbone.Collection.extend({
	model: year
});

var yearToday = String(new Date()).split(' ')[3];
var years = [];

for(var i = 1980; i <= 2014; i++){
	var x = JSON.stringify({year: i});			
	var y = jQuery.parseJSON(x);
	years.push(y);
};

var yearsCollection = new Years(years);
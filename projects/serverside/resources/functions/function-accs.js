var AccsDB = require('../../models/model-accs').AccsModel;
var Accs = require('../class/accs');

exports.loadDB = function(accsObject){
	AccsDB.find({}, function(err, accs){
		for(var i = 0;i < accs.length; i++){
			accsObject[accs[i]._id] = new Accs(accs[i]);
		}
	});
}
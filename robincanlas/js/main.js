/* JS FILE '= =""*/

(function(){
	var app = angular.module('main', [])

	.controller('mainController', function(mainFact){
		var self = this;
		self.mainFact = mainFact;

	})

	.factory('mainFact', function(){
		var self;
		return self = {
			init: function(){
				self.nav = [
					{title: 'HOME',link:''},
					{title: 'INFORMATION',link:''},
					{title: 'WORK',link:''},
					{title: 'CONTACTS',link:''},
				];
			},
		}
	})

	.run(function(mainFact){
		mainFact.init();

	});


})();
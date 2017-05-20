(function(){
	var app = angular.module('main', [])

	.controller('mainController', function(mainFact){
		var self = this;
		self.mainFact = mainFact;


	})

	.factory('mainFact', function(){
		var self = {
			init: function(){
				self.nav = [
					{title: 'HOME',link:''},
					{title: 'INFORMATION',link:''},
					{title: 'WORK',link:''},
					{title: 'CONTACTS',link:''},
				];
				self.loadFinish = false;

				self.loadQ = new createjs.LoadQueue(true, false, true);

				self.loadQ.loadManifest([
					{id:'loadImg', src:'./images/flash-run1.gif'},
					{id:'bg', src:'./images/main-bg.jpg'},
				]);

				self.loadQ.on('error', function(){
					console.log('error');
				});				

				self.loadQ.on('complete', function(){
					self.loadFinish = true;
				});
			},
		};
		return self;
	})

	.run(function(mainFact, $timeout){
		mainFact.init();

		$timeout(function(){
		},1000);
			// mainFact.loadFinish = true;
	});


})();
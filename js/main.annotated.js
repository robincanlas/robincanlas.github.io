(function(){
	var app = angular.module('main', [])

	.controller('mainController', ["mainFact", function(mainFact){
		var self = this;
		self.mainFact = mainFact;


	}])

	.factory('mainFact',['$q' , function($q){
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
					self.loadComplete(false);
				});				

				self.loadQ.on('complete', function(){
					var promise = self.loadComplete(true);

					promise.then(function(){
						self.loadFinish = true;
					}, function(reason){
						self.loadFinish = false;
					});
				});
			},
			loadComplete: function(param){
				return $q(function(resolve, reject){
					if(param){
						resolve('load finish');
					}else{
						reject('error loading');
					}
				});
			}
		};
		return self;
	}])

	.run(["mainFact", "$timeout", function(mainFact, $timeout){
		mainFact.init();

	}]);


})();
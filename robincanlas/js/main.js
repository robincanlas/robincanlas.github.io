(function(){
	var app = angular.module('main', [])

	.controller('mainController', function(mainFact){
		var self = this;
		self.mainFact = mainFact;


	})

	.factory('mainFact',['$q' , function($q){
		var self = {
			init: function(){
				self.nav = [
					{title: 'HOME',link:''},
					{title: 'INFORMATION',link:''},
					{title: 'WORK',link:''},
					{title: 'CONTACTS',link:''},
				];
				self.canvasWidth = 500;
				self.canvasHeight = 400;

				self.createCube();

				//set to true for development
				self.loadFinish = true;

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
			createCube: function(){
				var scene = new THREE.Scene();
				var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
				var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});


				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				var geometry = new THREE.BoxGeometry( 1, 1, 1 );
				var material = new THREE.MeshNormalMaterial();
				var cube = new THREE.Mesh( geometry, material );
				scene.add( cube );

				camera.position.z = 5;

				var animate = function () {
					requestAnimationFrame( animate );

					cube.rotation.x += 0.01;
					cube.rotation.y += 0.01;

					renderer.render(scene, camera);
				};

				animate();
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

	.run(function(mainFact, $timeout){
		mainFact.init();

	});


})();
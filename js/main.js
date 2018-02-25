(function(){
	var app = angular.module('main', ['professorNoZoom'])

	.controller('mainController', function(mainFact){
		var self = this;
		self.mainFact = mainFact;

	})

	.factory('mainFact',['$q' , function($q){
		var self = {
			init: function(){
				self.nav = [
					{title: 'HOME',link:'',state: true},
					{title: 'INFORMATION',link:'',state: false},
					{title: 'WORK',link:'',state: false},
					{title: 'PHOTOGRAPHY',link:'',state: false},
				];

				self.createCube();
				window.onresize = function(){
					self.createCube();
				};

				//set to true for development
				self.loadFinish = true;

				//fix createjs loading
				// self.loadFinish = false;

				// self.loadQ = new createjs.LoadQueue(true, false, true);

				// self.loadQ.loadManifest([
				// 	{id:'loadImg', src:'./images/flash-run1.gif'},
				// 	{id:'bg', src:'./images/main-bg.jpg'},
				// ]);

				// self.loadQ.on('error', function(){
				// 	self.loadComplete(false);
				// });				

				// self.loadQ.on('complete', function(){
				// 	var promise = self.loadComplete(true);
				// 	promise.then(function(){
				// 		self.loadFinish = true;
				// 	}, function(reason){
				// 		self.loadFinish = false;
				// 	});
				// });

			},
			loadComplete: function(param){
				return $q(function(resolve, reject){
					if(param){
						resolve('load finish');
					}else{
						reject('error loading');
					}
				});
			},
			createCube: function(){
				var scene = new THREE.Scene();
				var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
				var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});


				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				var geometry = new THREE.BoxGeometry( 1.8, 1.8, 1.8 );
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
			goTo: function(index){
				for(var i = 0; i < self.nav.length; i++){
					self.nav[i].state = i === index ? true : false;
				}
			},
		};
		return self;
	}])

	.run(function(mainFact, $timeout){
		mainFact.init();
	});


})();


(function() {
	angular.module('professorNoZoom', [])
		.run(function($document, $window) {	
			document.addEventListener('keydown', function(e){
				if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
					event.preventDefault();
					// 107 Num Key  +
					//109 Num Key  -
					//173 Min Key  hyphen/underscor Hey
					// 61 Plus key  +/=
				}
			});

			angular.element($window).bind('mousewheel DOMMouseScroll', function(event) {
				if (event.ctrlKey == true) {
					event.preventDefault();
				}
			});

		});
}());
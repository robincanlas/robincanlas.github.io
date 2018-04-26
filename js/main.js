(function(){
	var mainController = function(mainFactory){
		var self = this;
		self.mainFactory = mainFactory;

	}	

	var mainFactory = function($q){
		var self = {
			init: function(){
				self.photos = [
					{loaded: false, src: 'https://c1.staticflickr.com/5/4541/38349824082_e81d2147d8_k.jpg'},
					{loaded: false, src: 'https://c1.staticflickr.com/5/4475/37620786480_f7abd431fc_k.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
					{loaded: false, src: 'https://digital-photography-school.com/wp-content/uploads/2015/07/how-to-do-milky-way-photography-tutorial.jpg'},
				];

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

				self.createPhotoPagination();

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

				self.promisePo = new Promise((resolve, reject) => {
					setTimeout(function() {
						resolve('boom success');
					}, 5000);

					setTimeout(function() {
						reject('boom error');
					}, 7000);
				});

				self.promisePo.then( (success) => {
					console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', success);		
				}, (error) => {
					console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', error);		
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
			},
			createCube: function(){
				var scene = new THREE.Scene();
				var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
				var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});
				scene.background = new THREE.Color('rgb(116,119,124)');

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
			createPhotoPagination: function(){
				self.maxPage = Math.round(self.photos.length/6);
				self.currentPage = 1;
				self.photosPerPage = self.photos.splice(0,6);
				self.pages = [];
				for(i = 1; i <= self.maxPage; i++){
					self.pages.push(i);
				}
			},
			prevPhotos: function(){
				console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'prev');		
			},
			nextPhotos: function(){
				console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'next');		
			}
		};
		return self;
	}

	var binLazyLoading = function(mainFactory, $timeout){
		return{
			restrict: 'A',
			link: function(scope, elem, attr){
				elem.bind('load', function(){
					$timeout(function(){
						mainFactory.photosPerPage[attr.index].loaded = true;					
					});
				});

				elem.bind('error', function(){
					console.log('ERROR LOADING IMAGE');
				})
			}
		}
	}

	var app = angular.module('main', ['professorNoZoom'])
	.controller('mainController', mainController)
	.factory('mainFactory', mainFactory)
	.directive('binLazyLoading', binLazyLoading)
	.run(function(mainFactory, $timeout){
		mainFactory.init();
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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/scripts/script.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/css/main.css":
/*!*****************************!*\
  !*** ./public/css/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/scripts/classes/main-class.jsx":
/*!***********************************************!*\
  !*** ./public/scripts/classes/main-class.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);

		this.loading = true;
		this.menu = [{ title: 'HOME', link: '', state: true }, { title: 'INFORMATION', link: '', state: false }, { title: 'WORK', link: '', state: false }, { title: 'PHOTOGRAPHY', link: '', state: false }];
		this.work = [];
	}

	_createClass(Main, [{
		key: 'loadingFinish',
		value: function loadingFinish(callback) {
			this.loading = false;
			callback();
		}
	}]);

	return Main;
}();

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./public/scripts/classes/photo-class.jsx":
/*!************************************************!*\
  !*** ./public/scripts/classes/photo-class.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Photo = function () {
	function Photo(data) {
		_classCallCheck(this, Photo);

		this.photos = [];
		this.originalPhotos = [];
		this.photoLoading = true;
	}

	_createClass(Photo, [{
		key: "getList",
		value: function getList() {
			return this.photos;
		}
	}, {
		key: "updatePhotos",
		value: function updatePhotos(photos, callback) {
			this.photos = [].concat(_toConsumableArray(this.photos), _toConsumableArray(photos));
			callback();
		}
	}, {
		key: "updateOriginalPhotos",
		value: function updateOriginalPhotos(photos, callback) {
			this.originalPhotos = [].concat(_toConsumableArray(this.originalPhotos), _toConsumableArray(photos));
			callback();
		}
	}, {
		key: "openThisPhoto",
		value: function openThisPhoto(index, callback) {
			callback(this.originalPhotos[index]);
		}
	}, {
		key: "updatePhotoLoading",
		value: function updatePhotoLoading(boolean, callback) {
			this.photoLoading = boolean;
			callback();
		}
	}]);

	return Photo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./public/scripts/components/loading-component.jsx":
/*!*********************************************************!*\
  !*** ./public/scripts/components/loading-component.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingComponent = function (_React$Component) {
	_inherits(LoadingComponent, _React$Component);

	function LoadingComponent(props) {
		_classCallCheck(this, LoadingComponent);

		return _possibleConstructorReturn(this, (LoadingComponent.__proto__ || Object.getPrototypeOf(LoadingComponent)).call(this, props));
	}

	_createClass(LoadingComponent, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					'span',
					{ className: 'loading-wrapper' },
					React.createElement(
						'div',
						{ className: 'view' },
						React.createElement(
							'div',
							{ className: 'plane main' },
							React.createElement('div', { className: 'circle' }),
							React.createElement('div', { className: 'circle' }),
							React.createElement('div', { className: 'circle' }),
							React.createElement('div', { className: 'circle' }),
							React.createElement('div', { className: 'circle' }),
							React.createElement('div', { className: 'circle' })
						)
					)
				)
			);
		}
	}]);

	return LoadingComponent;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoadingComponent);

/***/ }),

/***/ "./public/scripts/components/photography-component.jsx":
/*!*************************************************************!*\
  !*** ./public/scripts/components/photography-component.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotographyComponent = function (_React$Component) {
	_inherits(PhotographyComponent, _React$Component);

	function PhotographyComponent(props) {
		_classCallCheck(this, PhotographyComponent);

		return _possibleConstructorReturn(this, (PhotographyComponent.__proto__ || Object.getPrototypeOf(PhotographyComponent)).call(this, props));
	}

	_createClass(PhotographyComponent, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				this.props.photoLoading ? React.createElement(
					'span',
					{ className: 'hourglass-wrapper' },
					React.createElement('div', { className: 'hourglass' })
				) : React.createElement(
					'div',
					{ className: 'photo-row' },
					this.props.photos
				)
			);
		}
	}]);

	return PhotographyComponent;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (PhotographyComponent);

/***/ }),

/***/ "./public/scripts/script.jsx":
/*!***********************************!*\
  !*** ./public/scripts/script.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_photography_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/photography-component */ "./public/scripts/components/photography-component.jsx");
/* harmony import */ var _components_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loading-component */ "./public/scripts/components/loading-component.jsx");
/* harmony import */ var _classes_photo_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/photo-class */ "./public/scripts/classes/photo-class.jsx");
/* harmony import */ var _classes_main_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/main-class */ "./public/scripts/classes/main-class.jsx");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// COMPONENTS



// CLASSES


// STYLES


var MainTemplate = function (_React$Component) {
	_inherits(MainTemplate, _React$Component);

	function MainTemplate(props) {
		_classCallCheck(this, MainTemplate);

		var _this = _possibleConstructorReturn(this, (MainTemplate.__proto__ || Object.getPrototypeOf(MainTemplate)).call(this, props));

		_this.goToPage = _this.goToPage.bind(_this);
		_this.getActiveTemplate = _this.getActiveTemplate.bind(_this);
		_this.fetchPhotos = _this.fetchPhotos.bind(_this);
		_this.openPhoto = _this.openPhoto.bind(_this);
		_this.PhotoClass = new _classes_photo_class__WEBPACK_IMPORTED_MODULE_2__["default"]();
		_this.MainClass = new _classes_main_class__WEBPACK_IMPORTED_MODULE_3__["default"]();
		_this.loadq = new createjs.LoadQueue(true, null, true);
		_this.renderer = null;
		_this.camera = null;
		// this.loadq = new createjs.LoadQueue(false, null, true); //change to this one if you will use the image src
		_this.loadq.setMaxConnections(10);

		_this.state = {
			updatePhotos: 0,
			updateMenu: 0,
			updatePhotoLoading: 0
		};
		return _this;
	}

	_createClass(MainTemplate, [{
		key: 'createCube',
		value: function createCube() {
			var _this2 = this;

			// CUBE [S]
			var scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
			scene.background = new THREE.Color('rgb(116,119,124)');

			this.renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(this.renderer.domElement);

			var geometry = new THREE.BoxGeometry(2, 2, 2);
			var material = new THREE.MeshNormalMaterial();
			var cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

			this.camera.position.z = 5;

			var animate = function animate() {
				requestAnimationFrame(animate);
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				_this2.renderer.render(scene, _this2.camera);
			};

			animate();

			// LOGO CUBE
			if (window.innerWidth > 799) {
				this.createLogoCube();
			}
		}
	}, {
		key: 'createLogoCube',
		value: function createLogoCube() {
			var scene = new THREE.Scene(),
			    camera = new THREE.PerspectiveCamera(75, 100 / 100, 0.1, 1000),
			    renderer = new THREE.WebGLRenderer({ 'canvas': document.getElementById('logo-canvas'), 'alpha': true });

			renderer.setSize(100, 100);
			document.getElementById('main-logo-desktop').appendChild(renderer.domElement);

			var geometry = new THREE.BoxGeometry(2, 2, 2);
			for (var i = 0; i < geometry.faces.length; i++) {}
			// geometry.faces[ 0 ].color.setHex( Math.random() * 0xffffff );
			// geometry.faces[ 0 ].color.setRGB( 255, 0, 0 );
			// geometry.faces[ 1 ].color.setRGB( 255, 0, 0 );

			// let material = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );;

			var material = new THREE.MeshNormalMaterial();
			var cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

			camera.position.z = 4;

			var animateLogo = function animateLogo() {
				requestAnimationFrame(animateLogo);
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render(scene, camera);
			};

			animateLogo();
		}
	}, {
		key: 'resizeCube',
		value: function resizeCube() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		}
	}, {
		key: 'fetchPhotos',
		value: function fetchPhotos() {
			var _this3 = this;

			fetch('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=1bebc2dcb88a22bf64c2e90eb20dd3e5&user_id=43569478%40N04&format=json&nojsoncallback=1').then(function (res) {
				return res.json();
			}).then(function (result) {
				if (result.stat === 'ok') {

					var photos = result.photos.photo,
					    thisPhotos = [],
					    photographyTemplate = [];

					for (var i = 0; i < photos.length; i++) {
						var obj = {};
						obj.id = i;
						obj.index = i;
						obj.thumbnail = 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '_z.jpg';
						obj.url = 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '_b.jpg';
						obj.src = 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '_b.jpg';
						thisPhotos.push(obj);
					}

					_this3.loadq.loadManifest(thisPhotos);
					_this3.loadq.addEventListener('complete', function () {
						var photosPerColumn = thisPhotos.length / 4;
						for (var _i = 1; _i <= 4; _i++) {
							var rows = [];

							var _loop = function _loop(o) {
								rows.push(React.createElement('img', { className: 'photo', key: o, src: thisPhotos[o].thumbnail, style: { width: '100%' }, onClick: function onClick() {
										return _this3.openPhoto(thisPhotos[o].index);
									} }));
							};

							for (var o = Math.floor(photosPerColumn * (_i - 1)); o < Math.floor(photosPerColumn * _i); o++) {
								_loop(o);
							}

							var col = React.createElement(
								'div',
								{ key: _i, className: 'photo-column' },
								rows
							);
							photographyTemplate.push(col);
						}

						_this3.PhotoClass.updatePhotos(photographyTemplate, function () {
							_this3.PhotoClass.updateOriginalPhotos(thisPhotos, function () {
								_this3.PhotoClass.updatePhotoLoading(false, function () {
									_this3.MainClass.loadingFinish(function () {
										_this3.setState({
											updatePhotoLoading: _this3.state.updatePhotos += 1,
											updatePhotos: _this3.state.updatePhotos += 1
										}, function () {
											_this3.createCube();
											// RESIZE [S]
											window.onresize = function () {
												_this3.resizeCube();
											};
										});
									});
								});
							});
						});
					});

					_this3.loadq.addEventListener('error', function () {
						console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'error');
					});
				} else {
					console.log('API STATUS NOT OK');
				}
			}, function (error) {
				console.log('API ERROR', error);
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.fetchPhotos();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {}
	}, {
		key: 'openPhoto',
		value: function openPhoto(index) {
			this.PhotoClass.openThisPhoto(index, function (thisPhoto) {
				console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', thisPhoto);
			});
		}
	}, {
		key: 'goToPage',
		value: function goToPage(index) {
			var menu = this.MainClass.menu;
			for (var i = 0; i < menu.length; i++) {
				menu[i].state = false;
				if (i === index) menu[i].state = true;
			}

			this.setState({ updateMenu: this.state.updateMenu += 1 });
		}
	}, {
		key: 'getTitle',
		value: function getTitle() {
			var _this4 = this;

			return this.MainClass.menu.map(function (value, index) {
				var menuClassNames = 'header-btns left text-center c-pointer';
				if (value.state) menuClassNames += ' color-white';

				return React.createElement(
					'label',
					{ key: index, htmlFor: 'nav-checkbox' },
					React.createElement(
						'span',
						{ onClick: function onClick() {
								return _this4.goToPage(index);
							}, className: menuClassNames },
						value.title
					)
				);
			});
		}
	}, {
		key: 'getActiveTemplate',
		value: function getActiveTemplate() {
			var homePage = this.MainClass.menu[0].state,
			    informationPage = this.MainClass.menu[1].state,
			    workPage = this.MainClass.menu[2].state,
			    photographyPage = this.MainClass.menu[3].state,
			    template = void 0;

			if (homePage) {
				template = React.createElement(
					'span',
					{ className: 'main-body' },
					React.createElement(
						'span',
						{ className: 'main-logo' },
						'KR'
					),
					React.createElement(
						'span',
						{ className: 'main-name' },
						'Hi!, I\'m Kristoffer Robin Canlas'
					),
					React.createElement(
						'span',
						{ className: 'main-intro' },
						'Web Developer by day, Speedster and Photographer by night.'
					)
				);
			} else if (informationPage) {
				template = React.createElement(
					'span',
					{ className: 'information-wrapper' },
					React.createElement(
						'span',
						{ className: 'information-intro' },
						'Hello, my name is Kristoffer Robin Canlas, and I\'m the fastest Web Developer alive! I started Web Development around 2014. You can contact me using my contact number and email address below.'
					),
					React.createElement(
						'span',
						{ className: 'information-email' },
						'+63906-4636-752 | kristofferrobincanlas@gmail.com'
					)
				);
			} else if (workPage) {} else {
				template = React.createElement(_components_photography_component__WEBPACK_IMPORTED_MODULE_0__["default"], { photoLoading: this.PhotoClass.photoLoading, photos: this.PhotoClass.photos });
			}

			return template;
		}
	}, {
		key: 'render',
		value: function render() {
			var work = this.state.work;

			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					'span',
					{ className: 'main-bg' },
					React.createElement('canvas', { id: 'canvas', width: '500', height: '400' })
				),
				this.MainClass.loading ? React.createElement(_components_loading_component__WEBPACK_IMPORTED_MODULE_1__["default"], null) : React.createElement(
					'span',
					{ className: 'main-wrapper' },
					React.createElement('input', { type: 'checkbox', id: 'nav-checkbox', className: 'nav-checkbox' }),
					React.createElement(
						'label',
						{ className: 'nav-checkbox-label c-pointer', htmlFor: 'nav-checkbox' },
						React.createElement('span', { className: 'nav-checkbox-icon' })
					),
					React.createElement(
						'span',
						{ className: 'main-header' },
						React.createElement(
							'span',
							{ id: 'main-logo-desktop', className: 'main-logo-desktop' },
							React.createElement(
								'span',
								null,
								'KR'
							),
							React.createElement('canvas', { id: 'logo-canvas', width: '100', height: '100' })
						),
						this.getTitle()
					),
					this.getActiveTemplate()
				)
			);
		}
	}]);

	return MainTemplate;
}(React.Component);

ReactDOM.render(React.createElement(MainTemplate, null), document.getElementById("root"));

/***/ })

/******/ });
//# sourceMappingURL=build.js.map
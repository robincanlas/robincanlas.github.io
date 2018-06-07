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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./public/scripts/classes.jsx":
/*!************************************!*\
  !*** ./public/scripts/classes.jsx ***!
  \************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main(num1, num2) {
		_classCallCheck(this, Main);

		this.num1 = num1;
		this.num2 = num2;
	}

	_createClass(Main, [{
		key: "add",
		value: function add() {
			return this.num1 + this.num2;
		}
	}, {
		key: "multiply",
		value: function multiply() {
			return this.num1 * this.num2;
		}
	}]);

	return Main;
}();



/***/ }),

/***/ "./public/scripts/script.jsx":
/*!***********************************!*\
  !*** ./public/scripts/script.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./public/scripts/classes.jsx");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MainTemplate = function (_React$Component) {
	_inherits(MainTemplate, _React$Component);

	function MainTemplate(props) {
		_classCallCheck(this, MainTemplate);

		var _this = _possibleConstructorReturn(this, (MainTemplate.__proto__ || Object.getPrototypeOf(MainTemplate)).call(this, props));

		_this.goToPage = _this.goToPage.bind(_this);
		_this.goToSite = _this.goToSite.bind(_this);
		_this.getActiveTemplate = _this.getActiveTemplate.bind(_this);

		_this.state = {
			menu: [{ title: 'HOME', link: '', state: true }, { title: 'INFORMATION', link: '', state: false }, { title: 'WORK', link: '', state: false }, { title: 'PHOTOGRAPHY', link: '', state: false }],
			work: [{ title: 'PamanGoken', url: 'https://www.pamangoken.com' }, { title: 'GelandangBola', url: 'https://www.gelandangbola.com' }, { title: 'Poker', url: '' }, { title: 'Bandar', url: '' }, { title: 'Ceme', url: '' }]
		};
		return _this;
	}

	_createClass(MainTemplate, [{
		key: 'createCube',
		value: function createCube() {
			// CUBE [S]
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
			scene.background = new THREE.Color('rgb(116,119,124)');

			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

			var geometry = new THREE.BoxGeometry(2, 2, 2);
			var material = new THREE.MeshNormalMaterial();
			var cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

			camera.position.z = 5;

			var animate = function animate() {
				requestAnimationFrame(animate);
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render(scene, camera);
			};

			animate();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// RESIZE [S]
			this.createCube();
			window.onresize = function () {
				_this2.createCube();
			};
		}
	}, {
		key: 'goToPage',
		value: function goToPage(index) {
			var menu = this.state.menu;
			for (var i = 0; i < menu.length; i++) {
				menu[i].state = false;
				if (i === index) menu[i].state = true;
			}

			this.setState({ menu: menu });
		}
	}, {
		key: 'goToSite',
		value: function goToSite(url) {
			console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', url);
		}
	}, {
		key: 'getActiveTemplate',
		value: function getActiveTemplate() {
			var homePage = this.state.menu[0].state,
			    informationPage = this.state.menu[1].state,
			    workPage = this.state.menu[2].state,
			    photographyPage = this.state.menu[3].state,
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
			} else if (informationPage) {} else if (workPage) {} else {
				template = React.createElement(
					React.Fragment,
					null,
					React.createElement(
						'div',
						{ className: 'photo-row' },
						React.createElement(
							'div',
							{ className: 'photo-column' },
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/wedding.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/rocks.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/falls2.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/paris.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/nature.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/mist.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/paris.jpg', style: { width: '100%' } })
						),
						React.createElement(
							'div',
							{ className: 'photo-column' },
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/underwater.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/ocean.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/wedding.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/mountainskies.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/rocks.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/underwater.jpg', style: { width: '100%' } })
						),
						React.createElement(
							'div',
							{ className: 'photo-column' },
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/wedding.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/rocks.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/falls2.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/paris.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/nature.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/mist.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/paris.jpg', style: { width: '100%' } })
						),
						React.createElement(
							'div',
							{ className: 'photo-column' },
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/underwater.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/ocean.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/wedding.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/mountainskies.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/rocks.jpg', style: { width: '100%' } }),
							React.createElement('img', { src: 'https://www.w3schools.com/w3images/underwater.jpg', style: { width: '100%' } })
						)
					)
				);
			}

			return template;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var work = this.state.work;

			var title = this.state.menu.map(function (value, index) {
				var menuClassNames = 'header-btns left text-center c-pointer';
				if (value.state) menuClassNames += ' color-white';

				return React.createElement(
					'label',
					{ key: index, htmlFor: 'nav-checkbox' },
					React.createElement(
						'span',
						{ onClick: function onClick() {
								return _this3.goToPage(index);
							}, className: menuClassNames },
						value.title
					)
				);
			});

			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					'span',
					{ className: 'main-bg' },
					React.createElement('canvas', { id: 'canvas', width: '500', height: '400' })
				),
				React.createElement(
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
							{ className: 'main-logo-desktop' },
							'KR'
						),
						title
					),
					this.getActiveTemplate()
				)
			);
		}
	}]);

	return MainTemplate;
}(React.Component);

var WorkTemplate = function (_React$Component2) {
	_inherits(WorkTemplate, _React$Component2);

	function WorkTemplate(props) {
		_classCallCheck(this, WorkTemplate);

		return _possibleConstructorReturn(this, (WorkTemplate.__proto__ || Object.getPrototypeOf(WorkTemplate)).call(this, props));
	}

	_createClass(WorkTemplate, [{
		key: 'render',
		value: function render() {
			var _this5 = this;

			var workPage = this.props.workPage;

			var work = this.props.work.map(function (value, index) {
				return React.createElement(
					'span',
					{ onClick: function onClick() {
							return _this5.props.goToSite(value.url);
						}, className: 'color-white work-container', key: index },
					value.title
				);
			});

			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					'span',
					{ className: "header-content work" + (workPage ? ' active-content' : '') },
					work
				)
			);
		}
	}]);

	return WorkTemplate;
}(React.Component);

ReactDOM.render(React.createElement(MainTemplate, null), document.getElementById("root"));

/***/ })

/******/ });
//# sourceMappingURL=build.js.map
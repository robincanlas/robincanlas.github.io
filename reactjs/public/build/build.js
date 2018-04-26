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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./public/scripts/script.jsx":
/*!***********************************!*\
  !*** ./public/scripts/script.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import ReactDOM from 'react-dom';


var MainTemplate = function (_React$Component) {
	_inherits(MainTemplate, _React$Component);

	function MainTemplate(props) {
		_classCallCheck(this, MainTemplate);

		var _this = _possibleConstructorReturn(this, (MainTemplate.__proto__ || Object.getPrototypeOf(MainTemplate)).call(this, props));

		_this.goToPage = _this.goToPage.bind(_this);
		_this.goToSite = _this.goToSite.bind(_this);

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

			var geometry = new THREE.BoxGeometry(3, 3, 3);
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
		key: 'render',
		value: function render() {
			var _this3 = this;

			var title = this.state.menu.map(function (value, index) {
				// let menuClassNames = classNames({
				// 	'header-btns left text-center c-pointer': true,
				// 	'color-white': value.state
				// })

				var menuClassNames = 'header-btns left text-center c-pointer';
				if (value.state) menuClassNames += ' color-white';

				return React.createElement(
					'span',
					{ onClick: function onClick() {
							return _this3.goToPage(index);
						}, key: index, className: menuClassNames },
					value.title
				);
			});

			var work = this.state.work.map(function (value, index) {
				return React.createElement(
					'span',
					{ onClick: function onClick() {
							return _this3.goToSite(value.url);
						}, className: 'color-white work-container', key: index },
					value.title
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
					React.createElement(
						'span',
						{ className: 'header bin-relative-block-wh-100' },
						React.createElement(
							'span',
							{ className: 'header-nav c-pointer' },
							title
						),
						React.createElement(
							'span',
							{ className: "header-content home" + (this.state.menu[0].state ? ' active-content' : '') },
							React.createElement(
								'span',
								{ className: 'robins-content' },
								React.createElement(
									'span',
									{ className: "name-letters text-center" + (this.state.menu[0].state ? ' name-letters-active' : '') },
									' KR '
								),
								React.createElement(
									'span',
									{ className: "name-letters2 text-center" + (this.state.menu[0].state ? ' name-letters-active' : '') },
									' Kristoffer Robin '
								),
								React.createElement(
									'span',
									{ className: "name-letters2 text-center" + (this.state.menu[0].state ? ' name-letters-active' : '') },
									' Canlas '
								),
								React.createElement(
									'span',
									{ className: 'bin-relative-block-wh-100 header-desc-wrap' },
									React.createElement(
										'p',
										{ className: "header-desc text-center" + (this.state.menu[0].state ? ' name-letters-active' : '') },
										' Hello!, I\'m a Web Developer by day, Speedster and Photographer by night.'
									)
								)
							)
						),
						React.createElement(
							'span',
							{ className: "header-content information" + (this.state.menu[1].state ? ' active-content' : '') },
							React.createElement(
								'span',
								{ className: 'robins-content' },
								React.createElement(
									'span',
									{ className: "name-letters information-title text-center" + (this.state.menu[1].state ? ' name-letters-active' : '') },
									'Hero for hire.'
								),
								React.createElement(
									'span',
									{ className: "header-desc information-desc text-center" + (this.state.menu[1].state ? ' name-letters-active' : '') },
									'Hello, my name is Kristoffer Robin Canlas, and I\'m the fastest Web Developer alive! I started Web Development about 4 years ago and have enjoyed working in the internet industry. You can get in touch with me using my email address below.',
									React.createElement('br', null),
									React.createElement('br', null),
									React.createElement('br', null),
									'kristofferrobincanlas@gmail.com'
								)
							)
						),
						React.createElement(
							'span',
							{ className: "header-content work" + (this.state.menu[2].state ? ' active-content' : '') },
							work
						)
					)
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
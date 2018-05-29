<<<<<<< HEAD
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import classNames from 'classnames';


var MainTemplate = function (_React$Component) {
	_inherits(MainTemplate, _React$Component);

	function MainTemplate(props) {
		_classCallCheck(this, MainTemplate);

		var _this = _possibleConstructorReturn(this, (MainTemplate.__proto__ || Object.getPrototypeOf(MainTemplate)).call(this, props));

		_this.goToPage = _this.goToPage.bind(_this);
		_this.goToSite = _this.goToSite.bind(_this);

		_this.state = {
			menu: [{ title: 'HOME', link: '', state: false }, { title: 'INFORMATION', link: '', state: false }, { title: 'WORK', link: '', state: true }, { title: 'PHOTOGRAPHY', link: '', state: false }],
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

			var homePage = this.state.menu[0].state;
			var informationPage = this.state.menu[1].state;
			var workPage = this.state.menu[2].state;
			var photographyPage = this.state.menu[3].state;
			var work = this.state.work;

			var title = this.state.menu.map(function (value, index) {
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
							{ className: "header-content home" + (homePage ? ' active-content' : '') },
							React.createElement(
								'span',
								{ className: 'robins-content' },
								React.createElement(
									'span',
									{ className: "name-letters text-center" + (homePage ? ' name-letters-active' : '') },
									' KR '
								),
								React.createElement(
									'span',
									{ className: "name-letters2 text-center" + (homePage ? ' name-letters-active' : '') },
									' Kristoffer Robin '
								),
								React.createElement(
									'span',
									{ className: "name-letters2 text-center" + (homePage ? ' name-letters-active' : '') },
									' Canlas '
								),
								React.createElement(
									'span',
									{ className: 'bin-relative-block-wh-100 header-desc-wrap' },
									React.createElement(
										'p',
										{ className: "header-desc text-center" + (homePage ? ' name-letters-active' : '') },
										' Hello!, I\'m a Web Developer by day, Speedster and Photographer by night.'
									)
								)
							)
						),
						React.createElement(
							'span',
							{ className: "header-content information" + (informationPage ? ' active-content' : '') },
							React.createElement(
								'span',
								{ className: 'robins-content' },
								React.createElement(
									'span',
									{ className: "name-letters information-title text-center" + (informationPage ? ' name-letters-active' : '') },
									'Hero for hire.'
								),
								React.createElement(
									'span',
									{ className: "header-desc information-desc text-center" + (informationPage ? ' name-letters-active' : '') },
									'Hello, my name is Kristoffer Robin Canlas, and I\'m the fastest Web Developer alive! I started Web Development about 4 years ago and have enjoyed working in the internet industry. You can get in touch with me using my email address below.',
									React.createElement('br', null),
									React.createElement('br', null),
									React.createElement('br', null),
									'kristofferrobincanlas@gmail.com'
								)
							)
						),
						React.createElement(WorkTemplate, { work: work, workPage: workPage, goToSite: this.goToSite })
					)
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
=======
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./public/scripts/script.jsx")}({"./node_modules/classnames/index.js":function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a))e.push(r.apply(null,a));else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=r:void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},"./public/scripts/script.jsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/classnames/index.js");var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goToPage=n.goToPage.bind(n),n.goToSite=n.goToSite.bind(n),n.state={menu:[{title:"HOME",link:"",state:!0},{title:"INFORMATION",link:"",state:!1},{title:"WORK",link:"",state:!1},{title:"PHOTOGRAPHY",link:"",state:!1}],work:[{title:"PamanGoken",url:"https://www.pamangoken.com"},{title:"GelandangBola",url:"https://www.gelandangbola.com"},{title:"Poker",url:""},{title:"Bandar",url:""},{title:"Ceme",url:""}]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),a(t,[{key:"createCube",value:function(){var e=new THREE.Scene,t=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),n=new THREE.WebGLRenderer({canvas:document.getElementById("canvas")});e.background=new THREE.Color("rgb(116,119,124)"),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);var a=new THREE.BoxGeometry(3,3,3),r=new THREE.MeshNormalMaterial,o=new THREE.Mesh(a,r);e.add(o),t.position.z=5;!function a(){requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,n.render(e,t)}()}},{key:"componentDidMount",value:function(){var e=this;this.createCube(),window.onresize=function(){e.createCube()}}},{key:"goToPage",value:function(e){for(var t=this.state.menu,n=0;n<t.length;n++)t[n].state=!1,n===e&&(t[n].state=!0);this.setState({menu:t})}},{key:"goToSite",value:function(e){}},{key:"render",value:function(){var e=this,t=this.state.menu.map(function(t,n){var a="header-btns left text-center c-pointer";return t.state&&(a+=" color-white"),React.createElement("span",{onClick:function(){return e.goToPage(n)},key:n,className:a},t.title)}),n=this.state.work.map(function(t,n){return React.createElement("span",{onClick:function(){return e.goToSite(t.url)},className:"color-white work-container",key:n},t.title)});return React.createElement(React.Fragment,null,React.createElement("span",{className:"main-bg"},React.createElement("canvas",{id:"canvas",width:"500",height:"400"})),React.createElement("span",{className:"main-wrapper"},React.createElement("span",{className:"header bin-relative-block-wh-100"},React.createElement("span",{className:"header-nav c-pointer"},t),React.createElement("span",{className:"header-content home"+(this.state.menu[0].state?" active-content":"")},React.createElement("span",{className:"robins-content"},React.createElement("span",{className:"name-letters text-center"+(this.state.menu[0].state?" name-letters-active":"")}," KR "),React.createElement("span",{className:"name-letters2 text-center"+(this.state.menu[0].state?" name-letters-active":"")}," Kristoffer Robin "),React.createElement("span",{className:"name-letters2 text-center"+(this.state.menu[0].state?" name-letters-active":"")}," Canlas "),React.createElement("span",{className:"bin-relative-block-wh-100 header-desc-wrap"},React.createElement("p",{className:"header-desc text-center"+(this.state.menu[0].state?" name-letters-active":"")}," Hello!, I'm a Web Developer by day, Speedster and Photographer by night.")))),React.createElement("span",{className:"header-content information"+(this.state.menu[1].state?" active-content":"")},React.createElement("span",{className:"robins-content"},React.createElement("span",{className:"name-letters information-title text-center"+(this.state.menu[1].state?" name-letters-active":"")},"Hero for hire."),React.createElement("span",{className:"header-desc information-desc text-center"+(this.state.menu[1].state?" name-letters-active":"")},"Hello, my name is Kristoffer Robin Canlas, and I'm the fastest Web Developer alive! I started Web Development about 4 years ago and have enjoyed working in the internet industry. You can get in touch with me using my email address below.",React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),"kristofferrobincanlas@gmail.com"))),React.createElement("span",{className:"header-content work"+(this.state.menu[2].state?" active-content":"")},n))))}}]),t}();ReactDOM.render(React.createElement(r,null),document.getElementById("root"))}});
>>>>>>> master
//# sourceMappingURL=build.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/scripts/main.jsx");
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

/***/ "./public/images/chess-sprite.png":
/*!****************************************!*\
  !*** ./public/images/chess-sprite.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/images/chess-sprite.png";

/***/ }),

/***/ "./public/scripts/main.jsx":
/*!*********************************!*\
  !*** ./public/scripts/main.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_chess_sprite_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/chess-sprite.png */ "./public/images/chess-sprite.png");
/* harmony import */ var _images_chess_sprite_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_chess_sprite_png__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import React from 'react';
// import ReactDOM from 'react-dom';





var Canvas = function () {
	function Canvas() {
		_classCallCheck(this, Canvas);

		this.element = null;
		this.stage = null;
		this.loadQueue = null;
		this.chessPositions = {};
		this.removedPieces = [];
		this.pieces = {
			blackQueen: 0,
			blackKing: 1,
			blackRook: 2,
			blackKnight: 3,
			blackBishop: 4,
			blackPawn: 5,
			whiteQueen: 6,
			whiteKing: 7,
			whiteRook: 8,
			whiteKnight: 9,
			whiteBishop: 10,
			whitePawn: 11
		};
	}

	_createClass(Canvas, [{
		key: 'createPosition',
		value: function createPosition(position) {
			this.chessPositions[position] = null;
		}
	}, {
		key: 'insertPosition',
		value: function insertPosition(position, chessPiece) {
			this.chessPositions[position] = chessPiece;
		}
	}, {
		key: 'resetPosition',
		value: function resetPosition(chessPiece) {
			for (var i in this.chessPositions) {
				if (chessPiece === this.chessPositions[i]) {
					this.chessPositions[i] = null;
					break;
				}
			}
		}
	}, {
		key: 'removeThisPiece',
		value: function removeThisPiece(chessPiece) {
			this.removedPieces.push(chessPiece);
		}
	}, {
		key: 'clearThisPiece',
		value: function clearThisPiece(chessPiece) {
			var index = this.removedPieces.indexOf(chessPiece);
			if (index > -1) this.removedPieces.splice(index, 1);
		}
	}, {
		key: 'createStage',
		value: function createStage(element) {
			this.element = element;
			this.stage = new createjs.Stage(element);
			this.loadQueue = new createjs.LoadQueue(false, null, true);
		}
	}, {
		key: 'enableSpeedForce',
		value: function enableSpeedForce() {
			createjs.Ticker.addEventListener('tick', this.stage);
			createjs.Ticker.framerate = 60;
		}
	}, {
		key: 'disableSpeedForce',
		value: function disableSpeedForce() {
			createjs.Ticker.removeEventListener('tick', this.stage);
		}
	}, {
		key: 'createContainer',
		value: function createContainer(name, x, y) {
			var container = new createjs.Container();
			container.name = name;
			container.x = x;
			container.y = y;

			return container;
		}
	}, {
		key: 'createSpriteSheet',
		value: function createSpriteSheet(img) {
			var spriteSheet = new createjs.SpriteSheet(img);

			return spriteSheet;
		}
	}, {
		key: 'createSprite',
		value: function createSprite(spriteSheet, name, x, y, scaleX, scaleY) {
			var sprite = new createjs.Sprite(spriteSheet, name);
			sprite.name = name;
			sprite.x = x;
			sprite.y = y;
			sprite.scaleX = scaleX;
			sprite.scaleY = scaleY;

			return sprite;
		}
	}, {
		key: 'createRectangle',
		value: function createRectangle(name, x, y, w, h, strokeStyle, strokeColor, fillColor) {
			var rectangle = new createjs.Shape();
			rectangle.name = name;
			rectangle.defaultBgColor = fillColor;
			rectangle.backgroundColor = rectangle.graphics.beginFill(fillColor).command;
			rectangle.borderColor = rectangle.graphics.beginStroke(strokeColor).command;
			rectangle.graphics.setStrokeStyle(strokeStyle);
			rectangle.graphics.drawRect(x, y, w, h);

			return rectangle;
		}
	}, {
		key: 'createText',
		value: function createText(txt, x, y) {
			var text = new createjs.Text(txt, "20px Arial", "orange");
			text.x = x;
			text.y = y;

			return text;
		}
	}]);

	return Canvas;
}();

var classCanvas = new Canvas();

var Game = function (_React$Component) {
	_inherits(Game, _React$Component);

	function Game(props) {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

		_this.stage = null;
		_this.tile = null;
		return _this;
	}

	_createClass(Game, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.stage = classCanvas.createStage(document.getElementById('canvas'));
			classCanvas.enableSpeedForce();

			var tileContainer = classCanvas.createContainer('tileContainer', 0, 0),
			    chessPieceContainer = classCanvas.createContainer('chessPieceContainer', 0, 0),
			    tileWH = 50,
			    yPos = 0,
			    rowCount = 0,
			    count = 0,
			    chessNumberPos = 9;

			// for(let o = 1;o <= 8;o++){
			// 	yPos = tileWH * o;
			// 	for(let i = 0;i <= 7; i++){
			// 		let count = i + 1;
			// 		let color = ( count & 1 ) ? "wheat" : "black";
			// 		if(o % 2 === 0) color = ( count & 1 ) ? "black" : "wheat";

			// 		let square = classCanvas.createRectangle(`square${i}`, tileWH*count, yPos,tileWH,tileWH,1,'black',color);

			// 		tileContainer.addChild(square);
			// 	}
			// }

			// var chr = String.fromCharCode(65 + n);

			for (var i = 0; i <= 63; i++) {
				var row = i % 8 === 0;
				if (row) {
					chessNumberPos -= 1;
					rowCount += 1;
					count = 0;
				}

				yPos = tileWH * rowCount;
				count += 1;
				var color = count & 1 ? "wheat" : "black";
				if (rowCount % 2 === 0) color = count & 1 ? "black" : "wheat";
				var square = classCanvas.createRectangle('' + String.fromCharCode(65 + (count - 1)) + chessNumberPos, tileWH * count, yPos, tileWH, tileWH, 1, 'black', color);
				classCanvas.createPosition(String.fromCharCode(65 + (count - 1)) + chessNumberPos);

				//test position number
				// let text = classCanvas.createText(`${String.fromCharCode(65 + (count - 1))}${chessNumberPos}`, tileWH*count, yPos)

				tileContainer.addChild(square);
			}

			classCanvas.stage.addChild(tileContainer);
			var defaultPos = 50;
			var spriteData = {};
			spriteData.images = [_images_chess_sprite_png__WEBPACK_IMPORTED_MODULE_1___default.a];
			spriteData.frames = { width: 64, height: 64 };
			spriteData.animations = classCanvas.pieces;

			var spriteSheet = classCanvas.createSpriteSheet(spriteData);

			this.createChessPiece(chessPieceContainer, tileContainer, tileWH, defaultPos, spriteSheet, function () {
				classCanvas.stage.addChild(chessPieceContainer);
				console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', classCanvas.chessPositions);
			});
		}
	}, {
		key: 'createChessPiece',
		value: function createChessPiece(chessPieceContainer, tileContainer, tileWH, defaultPos, spriteSheet, callback) {
			//PAWNS
			for (var i = 1; i <= 8; i++) {
				var whitePawnCont = classCanvas.createContainer('whitePawn' + i, defaultPos * i + 25, 376),
				    blackPawnCont = classCanvas.createContainer('blackPawn' + i, defaultPos * i + 25, 125),
				    whitePawn = classCanvas.createSprite(spriteSheet, 'whitePawn', 0, 0, .85, .85),
				    blackPawn = classCanvas.createSprite(spriteSheet, 'blackPawn', 0, 0, .85, .85);

				classCanvas.insertPosition(String.fromCharCode(65 + (i - 1)) + '7', 'blackPawn' + i);
				classCanvas.insertPosition(String.fromCharCode(65 + (i - 1)) + '2', 'whitePawn' + i);

				whitePawn.regX = whitePawn.regY = blackPawn.regX = blackPawn.regY = 32;
				this.listener(whitePawnCont, tileContainer, tileWH, chessPieceContainer);
				this.listener(blackPawnCont, tileContainer, tileWH, chessPieceContainer);

				whitePawnCont.addChild(whitePawn);
				blackPawnCont.addChild(blackPawn);
				chessPieceContainer.addChild(whitePawnCont, blackPawnCont);
			}

			//ROOKS, KNIGHT, BISHOP
			for (var _i = 1; _i <= 2; _i++) {
				var whiteRookCont = classCanvas.createContainer('whiteRook' + _i, _i > 1 ? 429 : 77, 425),
				    blackRookCont = classCanvas.createContainer('blackRook' + _i, _i > 1 ? 429 : 77, 75),
				    whiteKnightCont = classCanvas.createContainer('whiteKnight' + _i, _i > 1 ? 375 : 125, 425),
				    blackKnightCont = classCanvas.createContainer('blackKnight' + _i, _i > 1 ? 375 : 125, 75),
				    whiteBishopCont = classCanvas.createContainer('whiteBishop' + _i, _i > 1 ? 325 : 175, 425),
				    blackBishopCont = classCanvas.createContainer('blackBishop' + _i, _i > 1 ? 325 : 175, 75),
				    whiteRook = classCanvas.createSprite(spriteSheet, 'whiteRook', 0, 0, .85, .85),
				    blackRook = classCanvas.createSprite(spriteSheet, 'blackRook', 0, 0, .85, .85),
				    whiteKnight = classCanvas.createSprite(spriteSheet, 'whiteKnight', 0, 0, .85, .85),
				    blackKnight = classCanvas.createSprite(spriteSheet, 'blackKnight', 0, 0, .85, .85),
				    whiteBishop = classCanvas.createSprite(spriteSheet, 'whiteBishop', 0, 0, .85, .85),
				    blackBishop = classCanvas.createSprite(spriteSheet, 'blackBishop', 0, 0, .85, .85);

				classCanvas.insertPosition(String.fromCharCode(65 + (_i > 1 ? 7 : 0)) + '1', 'whiteRook' + _i);
				classCanvas.insertPosition(String.fromCharCode(65 + (_i > 1 ? 7 : 0)) + '8', 'blackRook' + _i);
				classCanvas.insertPosition(String.fromCharCode(65 + (_i > 1 ? 6 : 1)) + '1', 'whiteKnight' + _i);
				classCanvas.insertPosition(String.fromCharCode(65 + (_i > 1 ? 6 : 1)) + '8', 'blackKnight' + _i);
				classCanvas.insertPosition(String.fromCharCode(65 + (_i > 1 ? 5 : 2)) + '1', 'whiteBishop' + _i);
				classCanvas.insertPosition(String.fromCharCode(65 + (_i > 1 ? 5 : 2)) + '8', 'blackBishop' + _i);

				whiteRook.regX = whiteRook.regY = blackRook.regX = blackRook.regY = whiteKnight.regX = whiteKnight.regY = blackKnight.regX = blackKnight.regY = whiteBishop.regX = whiteBishop.regY = blackBishop.regX = blackBishop.regY = 32;

				this.listener(whiteRookCont, tileContainer, tileWH, chessPieceContainer);
				this.listener(blackRookCont, tileContainer, tileWH, chessPieceContainer);
				this.listener(whiteKnightCont, tileContainer, tileWH, chessPieceContainer);
				this.listener(blackKnightCont, tileContainer, tileWH, chessPieceContainer);
				this.listener(whiteBishopCont, tileContainer, tileWH, chessPieceContainer);
				this.listener(blackBishopCont, tileContainer, tileWH, chessPieceContainer);

				whiteRookCont.addChild(whiteRook);
				blackRookCont.addChild(blackRook);
				whiteKnightCont.addChild(whiteKnight);
				blackKnightCont.addChild(blackKnight);
				whiteBishopCont.addChild(whiteBishop);
				blackBishopCont.addChild(blackBishop);
				chessPieceContainer.addChild(whiteRookCont, blackRookCont, whiteKnightCont, blackKnightCont, whiteBishopCont, blackBishopCont);
			}

			//QUEENS
			var whiteQueenCont = classCanvas.createContainer('whiteQueen', 275, 425),
			    blackQueenCont = classCanvas.createContainer('blackQueen', 275, 75),
			    whiteQueen = classCanvas.createSprite(spriteSheet, 'whiteQueen', 0, 0, .85, .85),
			    blackQueen = classCanvas.createSprite(spriteSheet, 'blackQueen', 0, 0, .85, .85);

			whiteQueen.regX = whiteQueen.regY = blackQueen.regX = blackQueen.regY = 32;

			classCanvas.insertPosition('E1', 'whiteQueen');
			classCanvas.insertPosition('E8', 'blackQueen');

			this.listener(whiteQueenCont, tileContainer, tileWH, chessPieceContainer);
			this.listener(blackQueenCont, tileContainer, tileWH, chessPieceContainer);

			whiteQueenCont.addChild(whiteQueen);
			blackQueenCont.addChild(blackQueen);
			chessPieceContainer.addChild(whiteQueenCont, blackQueenCont);

			//KINGS
			var whiteKingCont = classCanvas.createContainer('whiteKing', 225, 425),
			    blackKingCont = classCanvas.createContainer('blackKing', 225, 75),
			    whiteKing = classCanvas.createSprite(spriteSheet, 'whiteKing', 0, 0, .85, .85),
			    blackKing = classCanvas.createSprite(spriteSheet, 'blackKing', 0, 0, .85, .85);

			whiteKing.regX = whiteKing.regY = blackKing.regX = blackKing.regY = 32;

			classCanvas.insertPosition('D1', 'whiteKing');
			classCanvas.insertPosition('D8', 'blackKing');

			this.listener(whiteKingCont, tileContainer, tileWH, chessPieceContainer);
			this.listener(blackKingCont, tileContainer, tileWH, chessPieceContainer);

			whiteKingCont.addChild(whiteKing);
			blackKingCont.addChild(blackKing);
			chessPieceContainer.addChild(whiteKingCont, blackKingCont);

			callback();
		}
	}, {
		key: 'listener',
		value: function listener(container, tileContainer, tileWH, chessPieceContainer) {
			var _this2 = this;

			container.on('dblclick', function () {
				return;
			});

			container.on("pressmove", function (e) {
				_this2.resetTileColor(tileContainer.children);
				_this2.highlightTile(tileContainer, e, tileWH);
			});

			container.on("pressup", function (e) {
				// container.off("pressmove");
				if (_this2.tile) _this2.attack(e, chessPieceContainer);
			});
		}
	}, {
		key: 'attack',
		value: function attack(e, chessPieceContainer) {
			classCanvas.clearThisPiece(e.currentTarget.name);
			if (classCanvas.chessPositions[this.tile.name]) {
				//remove piece here 
				classCanvas.removeThisPiece(classCanvas.chessPositions[this.tile.name]);
				var removedPiece = chessPieceContainer.getChildByName(classCanvas.chessPositions[this.tile.name]);
				removedPiece.x = 25 * (classCanvas.removedPieces.length + 1);
				removedPiece.y = 600;
				console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', classCanvas.removedPieces);
				classCanvas.createPosition(this.tile.name);
				classCanvas.resetPosition(e.currentTarget.name);
				classCanvas.insertPosition(this.tile.name, e.currentTarget.name);
			} else {
				classCanvas.resetPosition(e.currentTarget.name);
				classCanvas.insertPosition(this.tile.name, e.currentTarget.name);
			}

			e.currentTarget.x = this.tile.graphics.command.x + this.tile.graphics.command.w / 2;
			e.currentTarget.y = this.tile.graphics.command.y + this.tile.graphics.command.h / 2;
			this.revertTileColor();
			this.tile = null;
		}
	}, {
		key: 'resetTileColor',
		value: function resetTileColor(tiles) {
			for (var i = 0; i < tiles.length; i++) {
				tiles[i].backgroundColor.style = tiles[i].defaultBgColor;
			}
		}
	}, {
		key: 'highlightTile',
		value: function highlightTile(tileContainer, e, tileWH) {
			/*FOR TILE HIGHLIGHTING*/
			// list = tileContainer.children.filter((val) => {
			// 	if(e.stageY-50 < val.graphics.command.y && 
			// 		val.graphics.command.y < e.stageY) return val
			// });

			// let obj = list.find((val) => {
			// 	if (e.stageX >= val.graphics.command.x-64 && e.stageX <= val.graphics.command.x+tileWH &&
			// 	 e.stageY >= val.graphics.command.y-64 && e.stageY <= val.graphics.command.y+tileWH) {
			// 		return val;
			// 	}
			// });

			e.currentTarget.x = e.stageX;
			e.currentTarget.y = e.stageY;

			this.tile = tileContainer.children.find(function (val) {
				if (e.stageX >= 50 && e.stageY >= 50 && e.stageX <= 450 && e.stageY <= 450 && e.stageY - 50 < val.graphics.command.y && val.graphics.command.y < e.stageY && e.stageX >= val.graphics.command.x - 64 && e.stageX <= val.graphics.command.x + tileWH && e.stageY >= val.graphics.command.y - 64 && e.stageY <= val.graphics.command.y + tileWH) return val;
			});

			if (this.tile) this.tile.backgroundColor.style = 'hsl(120, 100%, 42%)';
		}
	}, {
		key: 'revertTileColor',
		value: function revertTileColor() {
			this.tile.backgroundColor.style = this.tile.defaultBgColor;
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement('canvas', { id: 'canvas', width: '500', height: '800' })
			);
		}
	}]);

	return Game;
}(React.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(Game, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=build.js.map
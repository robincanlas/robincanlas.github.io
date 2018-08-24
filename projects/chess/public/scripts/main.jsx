// import React from 'react';
// import ReactDOM from 'react-dom';


import '../css/main.css';
import spriteImage from '../images/chess-sprite.png';

class Canvas{
	constructor(){
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
		}
	}
	createPosition(position){
		this.chessPositions[position] = null;
	}
	insertPosition(position, chessPiece){
		this.chessPositions[position] = chessPiece;
	}
	resetPosition(chessPiece){
		for(let i in this.chessPositions){
			if(chessPiece === this.chessPositions[i]){
				this.chessPositions[i] = null;
				break;
			}
		}
	}
	removeThisPiece(chessPiece){
		this.removedPieces.push(chessPiece);
	}
	clearThisPiece(chessPiece){
		var index = this.removedPieces.indexOf(chessPiece);
		if (index > -1) this.removedPieces.splice(index, 1);
	}
	createStage(element){
		this.element = element;
		this.stage = new createjs.Stage(element);
		this.loadQueue = new createjs.LoadQueue(false, null, true);
	}
	enableSpeedForce(){
		createjs.Ticker.addEventListener('tick', this.stage);
		createjs.Ticker.framerate = 60;
	}
	disableSpeedForce(){
		createjs.Ticker.removeEventListener('tick', this.stage);
	}
	createContainer(name, x, y){
		let container = new createjs.Container();
			container.name = name;
			container.x = x;
			container.y = y;

		return container;
	}
	createSpriteSheet(img){
		let spriteSheet = new createjs.SpriteSheet(img);

		return spriteSheet;
	}
	createSprite(spriteSheet, name, x, y, scaleX, scaleY){
		let sprite = new createjs.Sprite(spriteSheet, name);
			sprite.name = name;
			sprite.x = x;
			sprite.y = y;
			sprite.scaleX = scaleX;
			sprite.scaleY = scaleY;

		return sprite;
	}
	createRectangle(name,x,y,w,h,strokeStyle,strokeColor,fillColor){
		let rectangle = new createjs.Shape();
			rectangle.name = name;
			rectangle.defaultBgColor = fillColor;
			rectangle.backgroundColor = rectangle.graphics.beginFill(fillColor).command;
			rectangle.borderColor = rectangle.graphics.beginStroke(strokeColor).command;
			rectangle.graphics.setStrokeStyle(strokeStyle);
			rectangle.graphics.drawRect(x,y,w,h);

		return rectangle;
	}
	createText(txt, x, y){
		let text = new createjs.Text(txt, "20px Arial", "orange");
			text.x = x;
			text.y = y;

		return text;
	}
}

let classCanvas = new Canvas();

class Game extends React.Component{
	constructor(props){
		super(props);
		this.stage = null;
		this.tile = null;
	}
	componentDidMount(){
		this.stage = classCanvas.createStage(document.getElementById('canvas'));
		classCanvas.enableSpeedForce();

		let tileContainer = classCanvas.createContainer('tileContainer', 0, 0),
			chessPieceContainer = classCanvas.createContainer('chessPieceContainer', 0, 0),
			tileWH = 50, yPos = 0, rowCount = 0, count = 0, chessNumberPos = 9;


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

		for(let i = 0;i <= 63; i++){
			let row = i % 8 === 0;
			if(row){
				chessNumberPos -= 1;
				rowCount += 1;	
				count = 0;
			} 
		
			yPos = tileWH * rowCount;
			count+=1;
			let color = ( count & 1 ) ? "wheat" : "black";
			if(rowCount % 2 === 0) color = ( count & 1 ) ? "black" : "wheat";
			let square = classCanvas.createRectangle(`${String.fromCharCode(65 + (count - 1))}${chessNumberPos}`, tileWH*count, yPos,tileWH,tileWH,1,'black',color);
			classCanvas.createPosition(String.fromCharCode(65 + (count - 1)) + chessNumberPos);

			//test position number
			// let text = classCanvas.createText(`${String.fromCharCode(65 + (count - 1))}${chessNumberPos}`, tileWH*count, yPos)

			tileContainer.addChild(square);
		}

		classCanvas.stage.addChild(tileContainer);
		let defaultPos = 50;
		let spriteData = {};
		spriteData.images = [spriteImage];
		spriteData.frames = {width: 64, height: 64};
		spriteData.animations = classCanvas.pieces;

		let spriteSheet = classCanvas.createSpriteSheet(spriteData);

		this.createChessPiece(chessPieceContainer, tileContainer, tileWH, defaultPos, spriteSheet, () => {
			classCanvas.stage.addChild(chessPieceContainer);
			console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', classCanvas.chessPositions);		
		});

	}
	createChessPiece(chessPieceContainer, tileContainer, tileWH, defaultPos, spriteSheet, callback){
		//PAWNS
		for(let i = 1;i <= 8;i++){
			let whitePawnCont = classCanvas.createContainer('whitePawn'+i, (defaultPos * i) + 25, 376),
				blackPawnCont = classCanvas.createContainer('blackPawn'+i, (defaultPos * i) + 25, 125),
				whitePawn = classCanvas.createSprite(spriteSheet, 'whitePawn', 0, 0, .85, .85),
				blackPawn = classCanvas.createSprite(spriteSheet, 'blackPawn', 0, 0, .85, .85);

			classCanvas.insertPosition(`${String.fromCharCode(65 + (i - 1))}7`, 'blackPawn'+i);
			classCanvas.insertPosition(`${String.fromCharCode(65 + (i - 1))}2`, 'whitePawn'+i);

			whitePawn.regX = whitePawn.regY = blackPawn.regX = blackPawn.regY = 32;
			this.listener(whitePawnCont, tileContainer, tileWH, chessPieceContainer);
			this.listener(blackPawnCont, tileContainer, tileWH, chessPieceContainer);

			whitePawnCont.addChild(whitePawn);
			blackPawnCont.addChild(blackPawn);
			chessPieceContainer.addChild(whitePawnCont, blackPawnCont);
		}

		//ROOKS, KNIGHT, BISHOP
		for(let i = 1;i <= 2;i++){
			let whiteRookCont = classCanvas.createContainer('whiteRook'+i, i > 1 ? 429 : 77, 425),
				blackRookCont = classCanvas.createContainer('blackRook'+i, i > 1 ? 429 : 77, 75),
				whiteKnightCont = classCanvas.createContainer('whiteKnight'+i, i > 1 ? 375 : 125, 425),
				blackKnightCont = classCanvas.createContainer('blackKnight'+i, i > 1 ? 375 : 125, 75),
				whiteBishopCont = classCanvas.createContainer('whiteBishop'+i, i > 1 ? 325 : 175, 425),
				blackBishopCont = classCanvas.createContainer('blackBishop'+i, i > 1 ? 325 : 175, 75),
				whiteRook = classCanvas.createSprite(spriteSheet, 'whiteRook', 0, 0, .85, .85),
				blackRook = classCanvas.createSprite(spriteSheet, 'blackRook', 0, 0, .85, .85),
				whiteKnight = classCanvas.createSprite(spriteSheet, 'whiteKnight', 0, 0, .85, .85),
				blackKnight = classCanvas.createSprite(spriteSheet, 'blackKnight', 0, 0, .85, .85),
				whiteBishop = classCanvas.createSprite(spriteSheet, 'whiteBishop', 0, 0, .85, .85),
				blackBishop = classCanvas.createSprite(spriteSheet, 'blackBishop', 0, 0, .85, .85);

			classCanvas.insertPosition(`${String.fromCharCode(65 + (i > 1 ? 7 : 0))}1`, 'whiteRook'+i);
			classCanvas.insertPosition(`${String.fromCharCode(65 + (i > 1 ? 7 : 0))}8`, 'blackRook'+i);
			classCanvas.insertPosition(`${String.fromCharCode(65 + (i > 1 ? 6 : 1))}1`, 'whiteKnight'+i);
			classCanvas.insertPosition(`${String.fromCharCode(65 + (i > 1 ? 6 : 1))}8`, 'blackKnight'+i);
			classCanvas.insertPosition(`${String.fromCharCode(65 + (i > 1 ? 5 : 2))}1`, 'whiteBishop'+i);
			classCanvas.insertPosition(`${String.fromCharCode(65 + (i > 1 ? 5 : 2))}8`, 'blackBishop'+i);

			whiteRook.regX = whiteRook.regY = blackRook.regX = blackRook.regY = 
			whiteKnight.regX = whiteKnight.regY = blackKnight.regX = blackKnight.regY =
			whiteBishop.regX = whiteBishop.regY = blackBishop.regX = blackBishop.regY = 32;

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
		let whiteQueenCont = classCanvas.createContainer('whiteQueen', 275, 425),
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
		let whiteKingCont = classCanvas.createContainer('whiteKing', 225, 425),
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
	listener(container, tileContainer, tileWH, chessPieceContainer){
		container.on('dblclick', () => {return});

		container.on("pressmove", (e) => {
			this.resetTileColor(tileContainer.children);
			this.highlightTile(tileContainer, e, tileWH);
		});

		container.on("pressup", (e) => {
			// container.off("pressmove");
			if(this.tile) this.attack(e, chessPieceContainer);
		});
	}
	attack(e, chessPieceContainer){
		classCanvas.clearThisPiece(e.currentTarget.name);
		if(classCanvas.chessPositions[this.tile.name]){
			//remove piece here 
			classCanvas.removeThisPiece(classCanvas.chessPositions[this.tile.name]);
			let removedPiece = chessPieceContainer.getChildByName(classCanvas.chessPositions[this.tile.name]);
			removedPiece.x = 25 * (classCanvas.removedPieces.length + 1);
			removedPiece.y = 600;
			console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', classCanvas.removedPieces);		
			classCanvas.createPosition(this.tile.name);
			classCanvas.resetPosition(e.currentTarget.name);
			classCanvas.insertPosition(this.tile.name, e.currentTarget.name);
		}else{
			classCanvas.resetPosition(e.currentTarget.name);
			classCanvas.insertPosition(this.tile.name, e.currentTarget.name);
		}

		e.currentTarget.x = this.tile.graphics.command.x + (this.tile.graphics.command.w/2);
		e.currentTarget.y = this.tile.graphics.command.y + (this.tile.graphics.command.h/2);
		this.revertTileColor();
		this.tile = null;
	}
	resetTileColor(tiles){
		for(let i = 0;i < tiles.length;i++){
			tiles[i].backgroundColor.style = tiles[i].defaultBgColor;
		}

	}
	highlightTile(tileContainer, e, tileWH){
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

		this.tile = tileContainer.children.find((val) => {
			if(e.stageX >= 50 && 
				e.stageY >= 50 &&
				e.stageX <= 450 &&
				e.stageY <= 450 &&
				e.stageY - 50 < val.graphics.command.y && 
				val.graphics.command.y < e.stageY && 
				e.stageX >= val.graphics.command.x-64 && 
				e.stageX <= val.graphics.command.x+tileWH &&
			 	e.stageY >= val.graphics.command.y-64 && 
			 	e.stageY <= val.graphics.command.y+tileWH) return val
		});

		if(this.tile) this.tile.backgroundColor.style = 'hsl(120, 100%, 42%)';	
			
	}
	revertTileColor(){
		this.tile.backgroundColor.style = this.tile.defaultBgColor;
	}
	render(){
		return(
			<React.Fragment>
				<canvas id="canvas" width="500" height="800"></canvas>
			</React.Fragment>
		);
	}
}


class App extends React.Component{

	render(){
		return(
			<React.Fragment>
				<Game />
			</React.Fragment>
		);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
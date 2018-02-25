import React from 'react';
import {BackgroundImg, CoinImg, CharacterImg} from 'scripts/assets';

const canvasWidth = 650;
const canvasHeight = 350;
const coinPosX = [];
const coinPosY = [];
let ctx, fps, fpsInterval, startTime, now, then, elapsed, 
rightTimeOut, lefTimeOut, spritePosWidth, spritePosHeight,
stopMoving = true, alreadyJump = false;

const canvasPos = {}
canvasPos.scale = 1;
canvasPos.ax = canvasWidth/2;
canvasPos.ay = canvasHeight/2;
canvasPos.bx = (canvasWidth*canvasPos.scale)/2;
canvasPos.by = (canvasHeight*canvasPos.scale)/2;
canvasPos.mx = canvasPos.ax - canvasPos.bx;
canvasPos.my = canvasPos.ay - canvasPos.by;
canvasPos.offsetY = 20;

const sprite = {
	character: {
		spriteWidth: 864,
		spriteHeight: 280,
		row: 2,
		cols: 8,
		trackRight: 0,
		trackLeft: 1,
		curFrame: 0,
		frameCount: 8, 
		x: 0,
		y: 220,
		srcX: 0,
		srcY: 0,
		left: false,
		right: true,
		speed: 12,
		scale: 1,
		img: null
	},
	coin: {
		spriteWidth: 1000,
		spriteHeight: 100,
		row: 1,
		cols: 10,
		trackRight: 0,
		trackLeft: 1,
		curFrame: 0,
		frameCount: 10, 
		x: 20,
		y: 150,
		srcX: 0,
		srcY: 0,
		left: false,
		right: true,
		speed: 12,
		scale: 0.4,
		img: null
	}
}

sprite.character.width = sprite.character.spriteWidth/sprite.character.cols;
sprite.character.height = sprite.character.spriteHeight/sprite.character.row;
sprite.coin.width = sprite.coin.spriteWidth/sprite.coin.cols;
sprite.coin.height = sprite.coin.spriteHeight/sprite.coin.row;
spritePosWidth = canvasWidth - sprite.coin.width;
spritePosHeight = canvasHeight - sprite.coin.height;
sprite.character.posX = (-canvasWidth/2) + (sprite.character.width/2);

let imageLoader = {
	coin : {
		_image: null,
		coinImage: null,
		canvasImg: function(imgSrc){
			let _canvas = document.createElement('canvas')
				_canvas.width = imgSrc.width;
				_canvas.height= imgSrc.height;
			let _ctx = _canvas.getContext('2d');
				_ctx.scale(sprite.coin.scale,sprite.coin.scale)
				_ctx.drawImage(imgSrc, 0, 0);

			return _canvas;
		},
		loadImage: function(src, callback){
			this._image = new Image();
			this._image.onload = callback;
			this._image.src = src;
		},
	},
	character : {
		onload: function(){
			this.img.onload = () => {
				this.loaded = true;
			}
		},
		onerror: function(){
			this.img.onerror = function(){
				console.log('not sexcess')
			}
		},
		src: function(a){
			this.img = new Image(),
			this.onload()
			this.onerror()
			this.img.src = a;
		},
		get: function(){
			if(!this.loaded) return null;
			let a = document.createElement('canvas')
				a.width = sprite.character.width;
				a.height= sprite.character.height;
				// a.width = this.img.width;
				// a.height= this.img.height;
			let b = a.getContext('2d');
			// b.drawImage(this.img, 0, 0);
			// this.clearCtx(b, a.width, a.height);		
			this.imgX = canvasWidth/2-sprite.character.width/2;
			this.imgY = canvasHeight/2-sprite.character.height/2;
			// b.rect(0,0,a.width,a.height);
			// b.fill();

			b.drawImage(this.img,
				sprite.character.srcX,
				sprite.character.srcY,
				sprite.character.width,
				sprite.character.height,
				0,
				0,
				sprite.character.width,
				sprite.character.height);

			return a;
		},
		clearCtx: function(ctx,w,h){
			ctx.clearRect(0,0,w,h)
		}
	}
}

const animateImage = {
	updateCoins(){
		sprite.coin.curFrame = ++sprite.coin.curFrame % sprite.coin.frameCount; 
		sprite.coin.srcX = sprite.coin.curFrame * sprite.coin.width * sprite.coin.scale; 
	},

	animateCoins(){
		this.updateCoins();
		for(let i = 0;i<5;i++){
			ctx.drawImage(imageLoader.coin.coinImage,
				sprite.coin.srcX,
				sprite.coin.srcY,
				sprite.coin.width*sprite.coin.scale,
				sprite.coin.height*sprite.coin.scale,
				coinPosX[i],
				coinPosY[i],
				sprite.coin.width*sprite.coin.scale,
				sprite.coin.height*sprite.coin.scale);
		}
	},

	updateCharacter(){
		//Updating the frame index 
		sprite.character.curFrame = ++sprite.character.curFrame % sprite.character.frameCount; 

		if(stopMoving) return;

		//Calculating the x coordinate for spritesheet 
		sprite.character.srcX = sprite.character.curFrame * sprite.character.width; 
		// //if left is true and the character has not reached the left edge 
		if(sprite.character.left && sprite.character.posX>=(-canvasWidth/2) + (sprite.character.width/2)){
			//calculate srcY 
			sprite.character.srcY = sprite.character.trackLeft * sprite.character.height; 
			//decreasing the x coordinate
			sprite.character.posX-=sprite.character.speed; 
		}	

		//if the right is true and character has not reached right edge 
		if(sprite.character.right && sprite.character.posX<(canvasWidth/2)-(sprite.character.width/2)){
			//calculating y coordinate for spritesheet
			sprite.character.srcY = sprite.character.trackRight * sprite.character.height; 
			//increasing the x coordinate 
			sprite.character.posX+=sprite.character.speed; 		
		}
	},
	moveCharacter(){
		this.updateCharacter();
		sprite.character.img = imageLoader.character.get();
		if(sprite.character.img){
			if(canvasPos.scale <= 0) return;
			ctx.translate(sprite.character.posX, (canvasPos.my+canvasHeight/2) - (sprite.character.height/2) + canvasPos.offsetY);		
			ctx.strokeStyle = '#f00';  // some color/style
			ctx.lineWidth = 2;         // thickness
			ctx.strokeRect(imageLoader.character.imgX,imageLoader.character.imgY, sprite.character.width, sprite.character.height);
			// ctx.scale(this.scale, this.scale);
			// ctx.rect(0,0,10,10); // upper left box
			// ctx.rect(canvasWidth/2-5,0,10,10); // upper mid box
			// ctx.rect(canvasWidth-10,0,10,10); // upper right
			// ctx.rect(0,canvasHeight-10,10,10); // lower left 
			// ctx.rect(canvasWidth/2-5,canvasHeight-10,10,10) // lower mid
			// ctx.rect(canvasWidth-10,canvasHeight-10,10,10); // lower right
			ctx.drawImage(sprite.character.img,imageLoader.character.imgX,imageLoader.character.imgY);
			// ctx.rect(ax-5,ay-5,10,10);
			// // ctx.translate(-mx-sprite.character.x,-(my+sprite.character.y)*-1);
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			// xxxx.updateSprite(sprite.character.img);

			// this.scale -= .01;
			ctx.fill();

			// ctx.drawImage(sprite.character.img,
			// sprite.character.srcX,
			// sprite.character.srcY,
			// sprite.character.width,
			// sprite.character.height,
			// sprite.character.x,
			// sprite.character.y,
			// sprite.character.width,
			// sprite.character.height);
		}else{
			sprite.character.img = imageLoader.character.get();
		}
	},
	jump(){
		if(alreadyJump) return;

		alreadyJump = true;
		var y = (canvasPos.my+canvasHeight/2) - (sprite.character.height/2) + canvasPos.offsetY;
		setInterval(() => {
			ctx.translate(sprite.character.posX, y-=10);
		},1000);
	}
}

const tick = {
	startAnimating(fps) {
	    fpsInterval = 1000 / fps;
	    then = window.performance.now();
	    startTime = then;
	    this.animate();
	},
	animate() {
	    // request another frame
	    window.requestAnimationFrame(() => {
	    	this.animate();
	    });

	    // calc elapsed time since last loop
	    now = window.performance.now();
	    elapsed = now - then;
	    // if enough time has elapsed, draw the next frame
	    if (elapsed > fpsInterval) {
	        // Get ready for next frame by setting then=now, but also adjust for your
	        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
	        then = now - (elapsed % fpsInterval);
			ctx.clearRect(0,0,canvasWidth,canvasHeight);     
	        animateImage.animateCoins();
	        animateImage.moveCharacter();
	    }
	}
}

class CanvasApp extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const mainCanvas = this.refs.canvas;
		ctx = mainCanvas.getContext('2d');
		mainCanvas.width = canvasWidth;
		mainCanvas.height = canvasHeight;

		for(let i = 0;i <5;i++){
			let sampx = Math.floor(Math.random()*(spritePosWidth-sprite.coin.width+1)+sprite.coin.width);
			let sampy = Math.floor(Math.random()*(spritePosHeight-sprite.coin.height+1)+sprite.coin.height);
			coinPosX.push(sampx);
			coinPosY.push(sampy);
		}

		imageLoader.character.src(CharacterImg);

		imageLoader.coin.loadImage(CoinImg, function(){
			imageLoader.coin.coinImage = imageLoader.coin.canvasImg(imageLoader.coin._image);
		})

		tick.startAnimating(12);
	}

	render(){
		let styles = {
			border: '1px solid red',
			background: `url(${BackgroundImg}) 100%`
		}

		return(
			<span>
				<canvas ref="canvas" style={styles}/>
			</span>
		);
	}
}

window.onkeydown = function(e){
	if(e.keyCode === 37){
		clearTimeout(lefTimeOut);
		sprite.character.left = true; 
		sprite.character.right = false; 
		stopMoving = false;
		lefTimeOut = setTimeout(function(){
			stopMoving = true;
		}, 300)
	}

	if(e.keyCode === 39){
		clearTimeout(rightTimeOut);
		sprite.character.left = false;
		sprite.character.right = true;
		stopMoving = false;
		rightTimeOut = setTimeout(function(){
			stopMoving = true;
		}, 300)
	}

	if(e.keyCode === 32){
		animateImage.jump();
	}
}

export default CanvasApp;
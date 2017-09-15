(function(){
	var mainCanvas = document.createElement('canvas');
	var ctx = mainCanvas.getContext('2d');
	var canvasWidth = mainCanvas.width = 650;
	var canvasHeight = mainCanvas.height = 350;
	var centerX = canvasWidth/2;
	var centerY = canvasHeight/2;
	mainCanvas.id = 'myCanvas';
	mainCanvas.style.border = '1px solid red';
	mainCanvas.style.background = 'url("bg.jpg") 100%';
	document.body.appendChild(mainCanvas); 
	var coinPosX = [];
	var coinPosY = []


	var sprite = {
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
		coin:{
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
	};

	sprite.character.width =  sprite.character.spriteWidth/sprite.character.cols;
	sprite.character.height =  sprite.character.spriteHeight/sprite.character.row;
	sprite.coin.width =  sprite.coin.spriteWidth/sprite.coin.cols;
	sprite.coin.height =  sprite.coin.spriteHeight/sprite.coin.row;

	var spritePosWidth = canvasWidth - sprite.coin.width;
	var spritePosHeight = canvasHeight - sprite.coin.height;
	for(var i = 0;i <5;i++){
		var sampx = Math.floor(Math.random()*(spritePosWidth-sprite.coin.width+1)+sprite.coin.width);
		var sampy = Math.floor(Math.random()*(spritePosHeight-sprite.coin.height+1)+sprite.coin.height);
		coinPosX.push(sampx);
		coinPosY.push(sampy);
	}

	var load = {
		_image: null,
		coinImage: null,
		canvasImg: function(imgSrc){
			var _canvas = document.createElement('canvas')
				_canvas.width = imgSrc.width;
				_canvas.height= imgSrc.height;
			var _ctx = _canvas.getContext('2d');
				_ctx.scale(sprite.coin.scale,sprite.coin.scale)
				_ctx.drawImage(imgSrc, 0, 0);

			return _canvas;
		},
		loadImage: function(src, callback){
			load._image = new Image();
			load._image.onload = callback;
			load._image.src = src;
		},
	}

	load.loadImage('coin.png', function(){
		load.coinImage = load.canvasImg(load._image);

	})

	function updateCoins(){
		for(var i = 0;i<5;i++){
			// ctx.clearRect(coinPosX[i],coinPosY[i],sprite.coin.width * sprite.coin.scale,sprite.coin.height * sprite.coin.scale); 
		}

		sprite.coin.curFrame = ++sprite.coin.curFrame % sprite.coin.frameCount; 
		sprite.coin.srcX = sprite.coin.curFrame * sprite.coin.width * sprite.coin.scale; 
	}

	function updateCharacter(){
		//Updating the frame index 
		sprite.character.curFrame = ++sprite.character.curFrame % sprite.character.frameCount; 

		//Clearing the drawn frame 
		// ctx.clearRect(0,0,canvasWidth,canvasHeight); 
		// ctx.clearRect(sprite.character.x,sprite.character.y,sprite.character.width,sprite.character.height); 


		if(stopMoving) return;

		//Calculating the x coordinate for spritesheet 
		sprite.character.srcX = sprite.character.curFrame * sprite.character.width; 

		// //if left is true and the character has not reached the left edge 
		if(sprite.character.left && sprite.character.x>0){
			//calculate srcY 
			sprite.character.srcY = sprite.character.trackLeft * sprite.character.height; 
			//decreasing the x coordinate
			sprite.character.x-=sprite.character.speed; 
		}	

		//if the right is true and character has not reached right edge 
		if(sprite.character.right && sprite.character.x<canvasWidth-sprite.character.width){
			//calculating y coordinate for spritesheet
			sprite.character.srcY = sprite.character.trackRight * sprite.character.height; 
			//increasing the x coordinate 
			sprite.character.x+=sprite.character.speed; 
		}
		
	}

	var xxxx = {
		img: null,
		onload:function(){
			xxxx.img.onload = function(){
				xxxx.loaded = true;
			}
		},
		onerror:function(){
			xxxx.img.onerror = function(){
				console.log('not sexcess')
			}
		},
		src: function(a){
			xxxx.img = new Image(),
			xxxx.onload()
			xxxx.onerror()
			xxxx.img.src = a;
		},
		get:function(){
			if(!xxxx.loaded) return null;
			var a = document.createElement('canvas')
				// a.width = sprite.character.width;
				// a.height= sprite.character.height;
				a.width = xxxx.img.width;
				a.height= xxxx.img.height;
			b = a.getContext('2d');
			xxxx.clearCtx(b, a.width, a.height);
			
			// xxxx.imgX = canvasWidth/2-sprite.character.width/2;
			// xxxx.imgY = canvasHeight/2-sprite.character.height/2;
			// b.rect(0,0,a.width,a.height)
			// b.fillStyle = 'red';
			// b.fill();
			b.drawImage(xxxx.img, 0,0);
			// b.drawImage(xxxx.img, 
			// sprite.character.srcX,
			// sprite.character.srcY,
			// sprite.character.width,
			// sprite.character.height,
			// 0,
			// 0,
			// sprite.character.width,
			// sprite.character.height);

			return a;
		},
		updateSprite: function(spriteImg){
			//Updating the frame index 
			sprite.character.curFrame = ++sprite.character.curFrame % sprite.character.frameCount; 

			//Clearing the drawn frame 
			// ctx.clearRect(0,0,canvasWidth,canvasHeight); 
			// ctx.clearRect(sprite.character.x,sprite.character.y,sprite.character.width,sprite.character.height); 


			if(stopMoving) return;

			//Calculating the x coordinate for spritesheet 
			sprite.character.srcX = sprite.character.curFrame * sprite.character.width; 

			// //if left is true and the character has not reached the left edge 
			if(sprite.character.left && sprite.character.x>0){
				//calculate srcY 
				sprite.character.srcY = sprite.character.trackLeft * sprite.character.height; 
				//decreasing the x coordinate
				sprite.character.x-=sprite.character.speed; 
			}	

			//if the right is true and character has not reached right edge 
			if(sprite.character.right && sprite.character.x<canvasWidth-sprite.character.width){
				//calculating y coordinate for spritesheet
				sprite.character.srcY = sprite.character.trackRight * sprite.character.height; 
				//increasing the x coordinate 
				sprite.character.x+=sprite.character.speed; 
			}



		},
		clearCtx: function(ctx,w,h){
			ctx.clearRect(0,0,w,h)
		}
	}

	xxxx.src("character.png");

	function jumpAnimation(){
		console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'kimochi!!');
	}
	var scale = 1;
	function moveCharacter(){

		updateCharacter();
		if(sprite.character.img){
			if(scale <= 0) return;

			// var ax = canvasWidth/2;
			// var ay = canvasHeight/2;
			// var bx = (canvasWidth*scale)/2;
			// var by = (canvasHeight*scale)/2;
			// var mx = ax - bx;
			// var my = ay - by;
			// var offsetY = 20;

			// ctx.translate(mx-sprite.character.x,(my+canvasHeight/2) - (sprite.character.height/2) + offsetY);
			// ctx.scale(scale,scale);
			// ctx.rect(0,0,10,10);
			// ctx.rect(canvasWidth/2-5,0,10,10);
			// ctx.rect(canvasWidth-10,0,10,10);
			// ctx.rect(0,canvasHeight-10,10,10);
			// ctx.rect(canvasWidth/2-5,canvasHeight-10,10,10)
			// ctx.rect(canvasWidth-10,canvasHeight-10,10,10);

			// ctx.drawImage(sprite.character.img,xxxx.imgX,xxxx.imgY);
			// ctx.rect(ax-5,ay-5,10,10);
			// // ctx.translate(-mx-sprite.character.x,-(my+sprite.character.y)*-1);
			// ctx.setTransform(1, 0, 0, 1, 0, 0);
			// xxxx.updateSprite(sprite.character.img);
			ctx.drawImage(sprite.character.img,
			sprite.character.srcX,
			sprite.character.srcY,
			sprite.character.width,
			sprite.character.height,
			sprite.character.x,
			sprite.character.y,
			sprite.character.width,
			sprite.character.height);

			// scale -= .01;
			// ctx.fill();
		}else{
			sprite.character.img = xxxx.get()
		}
	}

	function animateCoins(){
		updateCoins();
		for(var i = 0;i<5;i++){
			ctx.drawImage(load.coinImage,
				sprite.coin.srcX,
				sprite.coin.srcY,
				sprite.coin.width*sprite.coin.scale,
				sprite.coin.height*sprite.coin.scale,
				coinPosX[i],
				coinPosY[i],
				sprite.coin.width*sprite.coin.scale,
				sprite.coin.height*sprite.coin.scale);
		}
	}
	
	document.getElementById('leftbtn').addEventListener('click', function(){
		sprite.character.left = true; 
		sprite.character.right = false; 
	});

	document.getElementById('rightbtn').addEventListener('click', function(){
		sprite.character.left = false;
		sprite.character.right = true; 
	});

	var rightTimeOut, lefTimeOut;

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
    		 jumpAnimation();
    	}
    }

	var stopMoving = true;
	var fps, fpsInterval, startTime, now, then, elapsed;

	function startAnimating(fps) {
	    fpsInterval = 1000 / fps;
	    then = window.performance.now();
	    startTime = then;
	    animate();
	}

	function animate() {
	    // request another frame
	    window.requestAnimationFrame(animate);

	    // calc elapsed time since last loop
	    now = window.performance.now();
	    elapsed = now - then;

	    // if enough time has elapsed, draw the next frame
	    if (elapsed > fpsInterval) {
	        // Get ready for next frame by setting then=now, but also adjust for your
	        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
	        then = now - (elapsed % fpsInterval);
	        // drawBG();
			ctx.clearRect(0,0,canvasWidth,canvasHeight); 
	        animateCoins();
	        moveCharacter();
	    }
	}
	
	startAnimating(12);
	mainCanvas = bgCanvas = null;
})();


//cheat sheet

// //the with and height of our spritesheet
// var spriteWidth = 864,
// spriteHeight = 280,
// //we are having 2 rows and 8 cols in the current sprite sheet
// rows = 2,
// cols = 8,
// //The 0th (first) row is for the right movement
// trackRight = 0,
// //1st (second) row for the left movement (counting the index from 0)
// trackLeft = 1,
// //To get the width of a single sprite we divided the width of sprite with the number of cols
// //because all the sprites are of equal width and height 
// width = spriteWidth/cols,
// //Same for the height we divided the height with number of rows 
// height = spriteHeight/rows,
// //Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
// curFrame = 0,
// //The total frame is 8 
// frameCount = 8,
// //x and y coordinates to render the sprite 
// x = 0,
// y = 200,
// //x and y coordinates of the canvas to get the single frame 
// srcX = 0,
// srcY= 0,
// //tracking the movement left and write 
// left = false,
// //Assuming that at start the character will move right side 
// right = true,
// //Speed of the movement 
// speed = 12;
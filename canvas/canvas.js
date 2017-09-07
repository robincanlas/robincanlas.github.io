(function(){
	var mainCanvas = document.createElement('canvas');
	var ctx = mainCanvas.getContext('2d');
	var canvasWidth = mainCanvas.width = 600;
	var canvasHeight = mainCanvas.height = 500;
	mainCanvas.id = 'myCanvas';
	mainCanvas.style.border = '1px solid red';
	document.body.appendChild(mainCanvas); 

 	var circPosX = 285, circPosY = 235, radius = 30, dx = 5, dy = 5, playerBtnX = 0;

    function updater(){
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx.fillStyle = "#EEEEEE";
		ctx.fillRect(0, 0, canvasWidth, canvasHeight); 

		if(circPosX+30 > canvasWidth || circPosX < 30){
			dx = -dx;	
		} 

		if(circPosY+30 > canvasHeight || circPosY < 55){
			dy = -dy;
			// if(circPosY+30 > canvasHeight){
			// 	ctx.font = "30px Arial";
			// 	ctx.fillStyle = "red";
			// 	ctx.textAlign = "center";
			// 	ctx.fillText("Hello World",canvasWidth/2,canvasHeight/2);
			// }
		}

		if(circPosY+30 >= canvasHeight - 25 && circPosX >= playerBtnX && circPosX <= playerBtnX + 100){
			dy = -dy;
		}

		ctx.beginPath();
		ctx.rect(
			circPosX - 50, 
			0, 
			100, 25);
		ctx.fillStyle = 'maroon';
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
	    ctx.arc(circPosX, circPosY, radius, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = "#006699";
		ctx.fill();

		ctx.beginPath();
		ctx.rect(
			playerBtnX, 
			475, 
			100, 25);
		ctx.closePath();
		ctx.fillStyle = 'maroon';
		ctx.fill();

		circPosX += dx;
		circPosY += dy;

    	window.requestAnimationFrame(updater);
    }


    window.onkeyup = function(e){
    	if(e.keyCode === 37){
    		if(playerBtnX <= 0){
    			playerBtnX = 0
    		}else{
    			playerBtnX = playerBtnX - 50;
    		}
    	}

    	if(e.keyCode === 39){
    		if(playerBtnX >= canvasWidth-100){
    			playerBtnX = canvasWidth-100;
    		}else{
    			playerBtnX = playerBtnX + 50;
    		}
    	}
    }

    updater();
	mainCanvas = null;
})();
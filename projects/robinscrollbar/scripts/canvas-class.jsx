

class Canvas {
	constructor(canvasElement){
		this.stage = new createjs.Stage(canvasElement);
	}

	enableSpeedForce(){
		createjs.Ticker.addEventListener('tick', this.stage);
		createjs.Ticker.setFPS(60);
	}

	enableMouseMove(){
		createjs.Touch.enable(this.stage);
	}

	enableMouseMoveOutside(){
		this.stage.mouseMoveOutside = true;
	}

	createContainer(name, x, y){
		let container = new createjs.Container();
		container.name = name;
		container.x = x;
		container.y = y;
		return container;
	}
}


export default Canvas;

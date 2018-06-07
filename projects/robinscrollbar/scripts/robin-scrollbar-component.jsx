

/*
* TO DO
* CHECK THUMB HEIGHT WHEN DATA IS MANY
*/ 

import CanvasClass from '../classes/canvas-class';

 class RobinScrollbarComponent extends React.Component{
	constructor(props){
		super(props);

		this.drag = this.drag.bind(this);
		this.mouseScroll = this.mouseScroll.bind(this);
		this.updateScrollBarCanvas = this.updateScrollBarCanvas.bind(this);
		this.getThumbHeight = this.getThumbHeight.bind(this);
		this.showHideScroll = this.showHideScroll.bind(this);
		this.childrensHeight = 0;
		this.childrensHeightRatio = 0;
		this.parentHeight = 0;
		this.thumbHeight = 0;
		this.scrollBarCanvasElement = void 0;
		this.scrollBarCanvas = void 0;

	}
	componentDidMount(){
		this.scrollBarCanvasElement = document.getElementById(this.props.canvasId);

		this.getThumbHeight();
		this.updateScrollBarCanvas();
		this.showHideScroll();
	}
	componentDidUpdate(){
		this.getThumbHeight();
		this.setThumbHeight();
		this.showHideScroll();
	}
	showHideScroll(){
		if(this.props.itemList.length < 14){
			this.scrollBarCanvas.stage.getChildByName('scrollBarCont').alpha = 0;
			this.scrollBarCanvas.stage.getChildByName('hiddenRect').alpha = 0;
		}else{
			this.scrollBarCanvas.stage.getChildByName('scrollBarCont').alpha = 1;
			this.scrollBarCanvas.stage.getChildByName('hiddenRect').alpha = 1;
		}
	}
	updateScrollBarCanvas(){
		if(this.scrollBarCanvasElement){
			this.scrollBarCanvas = new CanvasClass(this.scrollBarCanvasElement);
			this.scrollBarCanvas.enableSpeedForce();
			this.scrollBarCanvas.enableMouseMove();
			this.scrollBarCanvas.enableMouseMoveOutside();
		
			let scrollBarCont = this.scrollBarCanvas.createContainer('scrollBarCont', 0, 0);

			let hiddenRect = new createjs.Shape();
				hiddenRect.name = 'hiddenRect';
				hiddenRect.graphics.beginFill("rgba(0, 0, 0, .01)");
				hiddenRect.graphics.drawRect(0,0,this.scrollBarCanvasElement.width,this.scrollBarCanvasElement.height);

			let scrollBar = new createjs.Shape();
				scrollBar.name = 'scrollBar';
				scrollBar.graphics.setStrokeStyle(1);
				scrollBar.graphics.beginFill("gray");
				scrollBar.graphics.drawRoundRect(40,0,27,this.scrollBarCanvasElement.height, 10);

			let scrollThumb = new createjs.Shape();
				scrollThumb.name = 'scrollThumb';
				scrollThumb.graphics.setStrokeStyle(1);
				scrollThumb.graphics.beginFill("white");
				scrollThumb.graphics.drawRoundRect(40,0,27,this.thumbHeight, 10);

			let maskShape = new createjs.Shape();
				maskShape.name = 'maskShape';
				maskShape.graphics.drawRoundRect(40,0,27,this.scrollBarCanvasElement.height, 10);
			
			scrollBarCont.mask = maskShape;

			scrollBarCont.addChild(scrollBar, scrollThumb);
			this.scrollBarCanvas.stage.addChild(hiddenRect, scrollBarCont);
			
			hiddenRect.addEventListener("mousedown", (event) => {
				this.drag(event);
				hiddenRect.addEventListener("pressmove", this.drag);
			});

			hiddenRect.addEventListener("pressup", (event) => {
				hiddenRect.removeEventListener("pressmove", this.drag);
			});
		}		
	}
	getThumbHeight(){
		this.parentHeight = this.props.bodyScroll.current.clientHeight;
		this.childrensHeight = this.props.bodyScroll.current.childNodes[0].clientHeight * this.props.itemList.length;
		this.childrensHeightRatio = this.parentHeight / this.childrensHeight;

		this.thumbHeight = this.parentHeight * this.childrensHeightRatio;
	}
	setThumbHeight(){
		let scrollBarCont = this.scrollBarCanvas.stage.getChildByName('scrollBarCont');
		let scrollThumb = scrollBarCont.getChildByName('scrollThumb');
		if(this.thumbHeight < 30) this.thumbHeight = 30
		scrollThumb.graphics.command.h = this.thumbHeight;
	}
	drag(event){
		event.stopPropagation();
		event.preventDefault();
		// let scrollThumb = this.scrollBarCanvas.stage.getChildByName('scrollThumb');
		let yPos = event.stageY - (this.thumbHeight/2);
		let endY = this.scrollBarCanvasElement.height - this.thumbHeight;
		
		if(yPos < 0){
			yPos = 0;
		}else if(yPos > endY){
			yPos = event.stageY;
		}

		let percentage = ((yPos - 0) / (this.scrollBarCanvasElement.height - 0));	
		this.props.bodyScroll.current.scrollTop = this.props.bodyScroll.current.scrollHeight * percentage

	} 
	mouseScroll(event){
		event.stopPropagation();
		event.preventDefault();
		// formula for scrollbar thumb movement using mouse scroll
		// percentage is equal to 'scroll thumb position' - 'starting position' / 'scrollbar height' - 'starting position' then multiply to 100
		let percentage = ((event.target.scrollTop - 0) / (event.target.scrollHeight - 0)),
			scrollBarCont = this.scrollBarCanvas.stage.getChildByName('scrollBarCont'),
			scrollBar = scrollBarCont.getChildByName('scrollBar'),
			scrollThumb = scrollBarCont.getChildByName('scrollThumb'),
			scrollThumbY = (percentage * scrollBar.graphics.command.h);

		scrollThumb.graphics.command.y = scrollThumbY; //no need to use animation in scrollbar
	}
	render(){
		return(
			<React.Fragment>
				<span className={this.props.wrapperClassName}>
					<content ref={this.props.bodyScroll} className={this.props.contentWrapperClassName} onScroll={(event) => this.mouseScroll(event)}>
						{this.props.itemList}
					</content>
				</span>
					
				<canvas width={this.props.canvasWidth} height={this.props.canvasHeight} id={this.props.canvasId}></canvas>
			</React.Fragment>
		);
	}
}

export default RobinScrollbarComponent;
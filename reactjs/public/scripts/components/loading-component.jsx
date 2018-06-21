class LoadingComponent extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<React.Fragment>
				<span className='loading-wrapper'>
					<div className='view'>
						<div className="plane main">
							<div className="circle"></div>
							<div className="circle"></div>
							<div className="circle"></div>
							<div className="circle"></div>
							<div className="circle"></div>
							<div className="circle"></div>
						</div>
					</div>
				</span>
			</React.Fragment>
		);
	}
}

export default LoadingComponent;
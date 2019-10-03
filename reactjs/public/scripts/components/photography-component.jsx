export default class PhotographyComponent extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<React.Fragment>
			{
				this.props.photoLoading 
				? 
				<span className='hourglass-wrapper'>
					<div className='hourglass'></div> 					
				</span>
				: 
				<div className='photo-row'>
					{this.props.photos}
				</div>
			}
			</React.Fragment>
		);
	}
}
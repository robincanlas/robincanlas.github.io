export default class HomeComponent extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<React.Fragment>
				<span className='main-body'>
					<span className='main-logo'>KR</span>
					<span className='main-name'>Hi!, I'm Kristoffer Robin Canlas</span>
					<span className='main-intro'>Web Developer by day, Speedster and Photographer by night.</span>
				</span>
			</React.Fragment>
		);
	}
}
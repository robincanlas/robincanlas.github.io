export default class WorkComponent extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<React.Fragment>
				<span className='information-wrapper'>
					<span className='information-intro'>
            You can check my previous web pages that I developed on my previous companies (screenshots only. Use CTRL+Mouse scroll to zoom and Hold Mouse scroll to navigate/drag).
					</span>
					<span className='information-email'>
            <a href="https://tinyurl.com/y8z353a4" target="_blank" rel="noopener noreferrer">Click here for screenshots.</a>
					</span>
				</span>
			</React.Fragment>
		);
	}
}
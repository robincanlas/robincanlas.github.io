export default class InformationComponent extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<React.Fragment>
        <span className='information-wrapper'>
          <span className='information-intro'>
            Hello, my name is Kristoffer Robin Canlas, and I'm the fastest Web Developer alive! I started Web Development around 2014. You can contact me using my contact number and email address below.
          </span>
          <span className='information-email'>
            +63906-4636-752 | kristofferrobincanlas@gmail.com
          </span>
        </span>
			</React.Fragment>
		);
	}
}
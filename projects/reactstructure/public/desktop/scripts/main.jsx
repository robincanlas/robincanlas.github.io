/**
 * 
 * @Author: Kristoffer Robin Canlas (aka: Wally West)
 * @Company: Leekie Enterprises
 * @2018
 * @FilePath: /public/desktop/scripts/main.jsx
 * @Version: 1.0
 * @Created: May 24, 2018
 * @Changes: May 25, 2018
 * @Desc: main script for Lurk
 * 
 */

import styles from '../css/main.css';


class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}
	componentDidMount(){

	}


	render(){
		return(
			<React.Fragment>
				<span className='main-container'>
					<span className='main-flex-container'>
						<span className='left-content'>
							<span className='header font-color-white text-center'>
								<span className='header-logo'></span>
								<span className='header-profile-balance'></span>
								<span className='header-profile-name'></span>
								<span className='header-profile-image'></span>
								<span className='header-player-count'>PLAYER ONLINE: 999999</span>
								<span className='header-player-top-hand'>TOP HAND GUNTENG</span>
								<span className='header-player-winloss'>W 999 L 999</span>
								<span className='header-table-profile'>STAKE 1,000 - 5 PRE ROUNDS</span>
							</span>
							<span className='body font-color-white text-center'>BODY</span>
							<span className='footer font-color-white text-center'>FOOTER</span>						
						</span>
						<span className='right-content'>
							<span className='game-content'> 
								<canvas id='canvas' className='game-canvas' width="474" height="854"></canvas>
								{/*<span className='canvas font-color-white'>CANVAS</span>*/}
							</span>
						</span>
					</span>
				</span>
			</React.Fragment>
		);
	}
}







/*
* MAGULANG NG MGA KOMPONENT 
*/ 
let MainComponent = ReactDOM.render(
	<Main />,
	document.getElementById('root')
)









console.log(
	`
	####### ##         ##       #####  ##   ##
	##      ##        ####     ##      ##   ##
	#####   ##       ##  ##     ####   #######  `+'RUN ROBIN RUN'+`
	##      ##      ########       ##  ##   ##
	##      ###### ##      ##  #####   ##   ##
	`
);
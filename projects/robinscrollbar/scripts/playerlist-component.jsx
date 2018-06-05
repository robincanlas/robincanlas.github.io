

import RobinScrollbarComponent from './robin-scrollbar-component';


 class PlayerListComponent extends React.Component{
	constructor(props){
		super(props);

		this.createHeaderTitle = this.createHeaderTitle.bind(this);
		this.createPlayerList = this.createPlayerList.bind(this);
		this.bodyScroll = React.createRef();		
	}
	componentDidMount(){

	}
	componentDidUpdate(){

	}
	createHeaderTitle(){
		return ['NO', 'PLAYER', 'WIN', 'LOSE', 'TOP HAND'].map((val, index) => {
			return <span className='player-table-header-text' key={index}>{val}</span>
		});
	}
	createPlayerList(){
		return this.props.playerList.map((val, index) => {
			let playerCount = index + 1,
				classNames = 'player-list-wrap';
				
			if(this.props.playerList.length === playerCount) classNames+= ' bottom-spacing'

			return(
				<span className={classNames} key={index}>
					<span className='player-table-info-text'>{playerCount}</span>
					<span className='player-table-info-text'>{val.name}</span>
					<span className='player-table-info-text'>{val.win}</span>
					<span className='player-table-info-text'>{val.lose}</span>
					<span className='player-table-info-text'>{val.topHand}</span>
				</span>
			);
		});
	}
	render(){
		return(
			<React.Fragment>
				<header className='player-table-header'>
					{this.createHeaderTitle()}
				</header>
				<RobinScrollbarComponent 
					canvasWidth='100' 
					canvasHeight='480' 
					canvasId='playerlist-scrollbar-canvas' 
					wrapperClassName='player-table-list-wrapper'
					contentWrapperClassName='player-table-list'
					bodyScroll={this.bodyScroll}
					itemList={this.createPlayerList()}
				/>
			</React.Fragment>
		);
	}
}

export default PlayerListComponent;
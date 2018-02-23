import React from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';

let data = {
	metaHumans: [{
		img: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Flash207.jpg',
		name: 'Wallace Rudolph "Wally" West',
		ability: 'Infinite super-speed, Superhuman agility and stamina, Time Travel, Ability to vibrate body to phase through matter',
		origin: 'Keystone City'
	}, {
		img: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Barry_Allen_Flash.jpg',
		name: 'Bartholomew Henry "Barry" Allen',
		ability: 'Infinite super-speed, Superhuman agility and stamina, Time Travel, Ability to vibrate body to phase through matter',
		origin: 'Central City'
	}, {
		img: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Reverse_Flash.jpg',
		name: 'Eobard Thawne',
		ability: 'Ability to move and deliver blows at superhuman speeds faster than light, Time travel & chronokinesis, Rapid cellular regeneration, Intangibility',
		origin: 'Cental City, 21st Century'
	}, {
		img: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Aquaman_issue_1%2C_the_new_52.jpg',
		name: 'Arthur Curry',
		ability: 'Atlantean physiology grants superhuman strength, stamina, endurance, durability, reflexes, agility, senses, and healing. Aquaman also boasts telepathy and mind control extending to aquatic life.',
		origin: 'Atlantis'
	}]
}

class MetahumanImage extends React.Component{
	constructor(props){
		super(props);
		console.log('test')
	}

	componentWillReceiveProps(nextProps){

	}

	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.imageSrc === this.props.imageSrc) return false
		return true
	}

	render(){
		let imageSrc = this.props.imageSrc;

		return(
			<span>
				<img className="metaImage" src={imageSrc} alt=""/>
			</span>
		);
	}
}

class MetaInfoData extends React.Component{
	constructor(props){
		super(props);		
		this.showImage = this.showImage.bind(this);
	}

	componentWillReceiveProps(nextProps){
	}

	showImage(image){
		this.props.onChangeImage(image);
	}

	render(){
		let tHead = this.props.headers.map((value,index,array) => {
			return <th key={index}> {value} </th>
		});

		let tData = this.props.metahumanInfo.map((value, index, array) => {
			return <tr key={index}>
				<td style={{cursor:'pointer'}} onClick={() => this.showImage(value.img)}>{value.name}</td>
				<td>{value.ability}</td>
				<td>{value.origin}</td>
			</tr>
		});

		return(
			<tbody>
				<tr>
					{tHead}
				</tr>
				{tData}
			</tbody>
		)
	}
}

class MainApp extends React.Component{
	constructor(props){
		super(props);
		this.onChangeImage = this.onChangeImage.bind(this);

		this.text = ['Name', 'Abilities', 'Place of Origin']; 
		this.state = {
			metahumanData: data.metaHumans,
			header: this.text,
			selectedImg: data.metaHumans[0].img,
			inputValue: 'test'
		};

		console.log('executed')
	}

	// componentWillMount(){
	// 	console.log('<=############# componentWillMount')
	// }

	// componentDidMount(){
	// 	console.log('<=############# componentDidMount')
	// }

	// componentWillReceiveProps(nextProps){
	// 	console.log('<=############# componentWillReceiveProps')
	// }

	// shouldComponentUpdate(nextProps, nextState){
	// 	// console.log('<=############# shouldComponentUpdate', nextState)
	// 	return true;
	// }

	// componentWillUpdate(nextProps, nextState){
	// 	console.log('<=############# componentWillUpdate')
	// }

	// componentDidUpdate(prevProps, prevState){
	// 	console.log('<=############# componentDidUpdate')
	// }

	// componentWillUnmount(){
	// 	console.log('<=############# componentWillUnmount')
	// }

	// custom methods
	updateValue(data){
		this.setState({
			metahumanData: data
		});
	}

	onChangeImage(src){
		this.setState({
			selectedImg: src
		});
	}

	onInputChange(value){
		this.setState({
			inputValue: value
		});

		this.refs.inputValue.style.background = 'red'
	}

	render(){
		let headers = this.text;
		let metaHumanInfo = this.state.metahumanData;
		let imageSrc = this.state.selectedImg;
		let inputValue = this.state.inputValue;

		const myScrollBar = {
			width: 400,
			height: 400
		}

		return(
			<div style={{float: 'left'}}>
				<input type="text" value={inputValue} onChange={e => this.onInputChange(e.target.value)} ref='inputValue'/>
				
				<h1>Metahuman Files</h1>
				<span style={{float: 'left'}}>
					<table>
						<MetaInfoData onChangeImage={this.onChangeImage} headers={headers} metahumanInfo={metaHumanInfo}/>
					</table>
				</span>
				<MetahumanImage imageSrc={imageSrc} />
				{//<Scrollbars style={myScrollBar}>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
					// <p>Some great content...</p>
				//</Scrollbars>
				}
			</div>
		);
	}
}

export {MainApp, MetaInfoBody, MetaInfoData};
// import React from 'react';
// import ReactDOM from 'react-dom';

console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'Robin Canlas v1.0.0');

class MainTemplate extends React.Component{
	constructor(props){
		super(props);
		console.log('MainTemplate')
	}
	render(){

		return(
			<span>
				<p>Hello poooo</p>
			</span>
		)
	}

}


ReactDOM.render(
	<MainTemplate/>,
	document.getElementById("root")
);
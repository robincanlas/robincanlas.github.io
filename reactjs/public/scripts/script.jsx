// import React from 'react';
// import ReactDOM from 'react-dom';
import classNames from 'classnames';


class MainTemplate extends React.Component{
	constructor(props){
		super(props);
		this.goToPage = this.goToPage.bind(this);
		this.goToSite = this.goToSite.bind(this);

		this.state = {
			menu : [
				{title: 'HOME',link:'',state: true},
				{title: 'INFORMATION',link:'',state: false},
				{title: 'WORK',link:'',state: false},
				{title: 'PHOTOGRAPHY',link:'',state: false},
			],
			work : [
				{title: 'PamanGoken', url: 'https://www.pamangoken.com'},
				{title: 'GelandangBola', url: 'https://www.gelandangbola.com'},
				{title: 'Poker', url: ''},
				{title: 'Bandar', url: ''},
				{title: 'Ceme', url: ''},
			]
		}
	}

	createCube(){
		// CUBE [S]
		let scene = new THREE.Scene();
		let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		let renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});
		scene.background = new THREE.Color('rgb(116,119,124)');

		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		let geometry = new THREE.BoxGeometry( 3, 3, 3 );
		let material = new THREE.MeshNormalMaterial();
		let cube = new THREE.Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 5;

		let animate = function () {
			requestAnimationFrame( animate );
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

		animate();
	}

	componentDidMount(){
		// RESIZE [S]
		this.createCube();
		window.onresize = () => {
			this.createCube();
		}
	}

	goToPage(index){
		const menu = this.state.menu;
		for(var i = 0;i < menu.length;i++){
			menu[i].state = false;
			if(i === index) menu[i].state = true;
		}

		this.setState({menu: menu})
	}

	goToSite(url){
		console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', url);
	}

	render(){
		const title = this.state.menu.map((value, index) => {
			// let menuClassNames = classNames({
			// 	'header-btns left text-center c-pointer': true,
			// 	'color-white': value.state
			// })

			let menuClassNames = 'header-btns left text-center c-pointer'
			if(value.state) menuClassNames += ' color-white'

			return <span onClick={() => this.goToPage(index)} key={index} className={menuClassNames}>{value.title}</span>

		});

		const work = this.state.work.map((value, index) => {
			return <span onClick={() => this.goToSite(value.url)} className='color-white work-container' key={index}>{value.title}</span>
		});

		return(
			<React.Fragment>
				<span className='main-bg'>
					<canvas id='canvas' width='500' height='400'></canvas>	
					
				</span>
				<span className='main-wrapper'>
					<span className='header bin-relative-block-wh-100'>
						<span className='header-nav c-pointer'>
							{title}
						</span>
						
						<span className={"header-content home" + (this.state.menu[0].state ? ' active-content' : '')}>
							<span className="robins-content">
								<span className={"name-letters text-center" + (this.state.menu[0].state ? ' name-letters-active' : '' )}> KR </span>
								<span className={"name-letters2 text-center" + (this.state.menu[0].state ? ' name-letters-active' : '' )}> Kristoffer Robin </span>
								<span className={"name-letters2 text-center" + (this.state.menu[0].state ? ' name-letters-active' : '' )}> Canlas </span>
								<span className="bin-relative-block-wh-100 header-desc-wrap">	
									<p className={"header-desc text-center" + (this.state.menu[0].state ? ' name-letters-active' : '' )}> Hello!, I'm a Web Developer by day, Speedster and Photographer by night.</p>
								</span>
							</span>
						</span>

						<span className={"header-content information" + (this.state.menu[1].state ? ' active-content' : '')}>
							<span className="robins-content">
								<span className={"name-letters information-title text-center" + (this.state.menu[1].state ? ' name-letters-active' : '')}>Hero for hire.</span>	
								<span className={"header-desc information-desc text-center"  + (this.state.menu[1].state ? ' name-letters-active' : '')}>Hello, my name is Kristoffer Robin Canlas, and I'm the fastest Web Developer alive! I started Web Development about 4 years ago and have enjoyed working in the internet industry. You can get in touch with me using my email address below. 

								<br/>
								<br/>
								<br/>
								kristofferrobincanlas@gmail.com
								</span>
							</span>
						</span>

						<span className={"header-content work" + (this.state.menu[2].state ? ' active-content' : '')}>
							{work}						
						</span>

					</span>
				</span>
			</React.Fragment>
		)
	}

}


ReactDOM.render(
	<MainTemplate/>,
	document.getElementById("root")
);
// import React from 'react';
// import ReactDOM from 'react-dom';


class MainTemplate extends React.Component{
	constructor(props){
		super(props);
		this.goToPage = this.goToPage.bind(this);
		this.state = {
			menu : [
				{title: 'HOME',link:'',state: true},
				{title: 'INFORMATION',link:'',state: false},
				{title: 'WORK',link:'',state: false},
				{title: 'PHOTOGRAPHY',link:'',state: false},
			]
		}
	}

	componentDidMount(){
		let scene = new THREE.Scene();
		let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		let renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});

		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		let geometry = new THREE.BoxGeometry( 1.8, 1.8, 1.8 );
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

	goToPage(index){
		const menu = this.state.menu;
		for(var i = 0;i < menu.length;i++){
			menu[i].state = false;
			if(i === index) menu[i].state = true;
		}

		this.setState({menu: menu})
	}

	render(){
		const title = this.state.menu.map((value, index) => {
			return <span onClick={() => this.goToPage(index)} key={index} className='header-btns left text-center c-pointer'>{value.title}</span>

		});

		return(
			<span>
				<span className='main-bg'>
					<canvas id='canvas' width='500' height='400'></canvas>	
					
				</span>
				<span className='main-wrapper'>
					<span className='header bin-relative-block-wh-100'>
						<span className='header-nav'>
							{title}
						</span>
					</span>
				</span>
			</span>
		)
	}

}


ReactDOM.render(
	<MainTemplate/>,
	document.getElementById("root")
);
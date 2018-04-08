// import React from 'react';
// import ReactDOM from 'react-dom';


class MainTemplate extends React.Component{
	constructor(props){
		super(props);
		console.log('MainTemplate')
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

	render(){

		return(
			<span>
				<canvas id='canvas' width='500' height='400'></canvas>	
			</span>
		)
	}

}


ReactDOM.render(
	<MainTemplate/>,
	document.getElementById("root")
);
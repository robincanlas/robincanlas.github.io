
import {Main} from './classes'
import styles from '../css/main.css'


class MainTemplate extends React.Component{
	constructor(props){
		super(props);
		this.goToPage = this.goToPage.bind(this);
		this.goToSite = this.goToSite.bind(this);
		this.getActiveTemplate = this.getActiveTemplate.bind(this);
		this.photographyPage = [];
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
			],
			photos : []
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

		let geometry = new THREE.BoxGeometry( 2, 2, 2 );
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

		// LOGO CUBE

		if(window.innerWidth > 799){
			let scene = new THREE.Scene(),
				camera = new THREE.PerspectiveCamera( 75, 100/100, 0.1, 1000 ),
				renderer = new THREE.WebGLRenderer({'canvas': document.getElementById('logo-canvas'), 'alpha': true});
			
			renderer.setSize( 100, 100 );
			document.getElementById('main-logo-desktop').appendChild( renderer.domElement );

			let geometry = new THREE.BoxGeometry( 2, 2, 2 );
			for(let i = 0;i < geometry.faces.length;i++){
				// geometry.faces[ 0 ].color.setHex( Math.random() * 0xffffff );
				// geometry.faces[ 0 ].color.setRGB( 255, 0, 0 );
				// geometry.faces[ 1 ].color.setRGB( 255, 0, 0 );
			}
			// let material = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );;

			let material = new THREE.MeshNormalMaterial();
			let cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 4;

			let animateLogo = function () {
				requestAnimationFrame( animateLogo );
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render(scene, camera);
			};

			animateLogo();
		}
	}

	componentDidMount(){
		fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e200ce8f71b3a3cb80fc8818b91590d&user_id=43569478%40N04&format=json&nojsoncallback=1&auth_token=72157669955105598-d7b163103b9cbd96&api_sig=35da0673a0cbe402a8b0c2e149c2014c')
		.then(res => res.json())
		.then((result) => {
			if(result.stat === 'ok'){
				let photos = result.photos.photo,
					thisPhotos = [], 
					photographyTemplate = [];
				
				for(let i = 0;i < photos.length;i++){
					let obj = {};
						obj.thumbnail = `https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}.jpg`;
						obj.url = `https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}_b.jpg`;
					thisPhotos.push(obj);
				}

				let photosPerColumn = thisPhotos.length/4;
				for(let i = 1;i <= 4;i++){
					let rows = [];
					for(let o = Math.floor(photosPerColumn*(i-1));o < Math.floor(photosPerColumn*i);o++){
						rows.push(
							<img key={o} src={thisPhotos[o].thumbnail} style={{width: '100%'}} />
						);
					}	

					let col = (
						<div key={i} className='photo-column'>
							{rows}
						</div>
					);
					photographyTemplate.push(col);			
				}

				this.setState({photos: photographyTemplate});
			}else{
				console.log('API STATUS NOT OK');			
			}
		}, (error) => {
			console.log('API ERROR', error)
		});
		// RESIZE [S]
		this.createCube();
		window.onresize = () => {
			this.createCube();
		}
	}
	componentDidUpdate(prevProps, prevState){
		console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', prevState);
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

	getActiveTemplate(){
		let homePage = this.state.menu[0].state,
			informationPage = this.state.menu[1].state,
			workPage = this.state.menu[2].state,
			photographyPage = this.state.menu[3].state,
			template = void 0;

		if(homePage){
			template = (
				<span className='main-body'>
					<span className='main-logo'>KR</span>
					<span className='main-name'>Hi!, I'm Kristoffer Robin Canlas</span>
					<span className='main-intro'>Web Developer by day, Speedster and Photographer by night.</span>
				</span>
			);
		}else if(informationPage){
			template = (
				<span>
					Hello, my name is Kristoffer Robin Canlas, and I'm the fastest Web Developer alive! I started Web Development about 4 years ago and have enjoyed working in the internet industry. You can get in touch with me using my email address below. 
					<br/>
					<br/>
					<br/>
					kristofferrobincanlas@gmail.com
				</span>
			);
		}else if(workPage){

		}else{
			template = (
				<React.Fragment>
					<div className='photo-row'>
						{this.state.photos}
					</div>
				</React.Fragment>
			)
		}


		return template;
	}

	render(){
		const work = this.state.work;

		const title = this.state.menu.map((value, index) => {
			let menuClassNames = 'header-btns left text-center c-pointer'
			if(value.state) menuClassNames += ' color-white'

			return(
				<label key={index} htmlFor="nav-checkbox">
					<span onClick={() => this.goToPage(index)} className={menuClassNames}>{value.title}</span>
				</label>
			);

		});


		return(
			<React.Fragment>
				<span className='main-bg'>
					<canvas id='canvas' width='500' height='400'></canvas>	
					
				</span>
				<span className='main-wrapper'>
					<input type="checkbox" id='nav-checkbox' className='nav-checkbox'/>
					<label className='nav-checkbox-label c-pointer' htmlFor="nav-checkbox">
						<span className='nav-checkbox-icon'></span>
					</label>
					<span className='main-header'>						
						<span id='main-logo-desktop' className='main-logo-desktop'>
							<span>KR</span>
							<canvas id='logo-canvas' width='100' height='100'>
							</canvas>
						</span>
						{title}
					</span>
						{
							this.getActiveTemplate()
						}
				</span>
			</React.Fragment>
		)
	}

}


class WorkTemplate extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let workPage = this.props.workPage;

		const work = this.props.work.map((value, index) => {
			return <span onClick={() => this.props.goToSite(value.url)} className='color-white work-container' key={index}>{value.title}</span>
		});

		return(
			<React.Fragment>
				<span className={"header-content work" + (workPage ? ' active-content' : '')}>
					{work}						
				</span>
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<MainTemplate/>,
	document.getElementById("root")
);
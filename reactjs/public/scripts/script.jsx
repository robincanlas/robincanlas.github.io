import { 
  LoadingComponent,
  HomeComponent,
  InformationComponent,
  WorkComponent,
  PhotographyComponent
} from './components';
// CLASSES
import { MainClass, PhotoClass } from './classes';
// STYLES
import styles from '../css/main.css';
// API
import { Photos } from './api';

const Page = {
  'Home': 0,
  'Information': 1,
  'Work': 2,
  'Photo': 3
}

class MainTemplate extends React.Component{
	constructor(props){
		super(props);
		this.goToPage = this.goToPage.bind(this);
		this.getActiveTemplate = this.getActiveTemplate.bind(this);
		this.fetchPhotos = this.fetchPhotos.bind(this);
		this.openPhoto = this.openPhoto.bind(this);
		this.PhotoClass = new PhotoClass();
		this.MainClass = new MainClass();
		this.loadq = new createjs.LoadQueue(true, null, true); 
		this.renderer = null;
		this.camera = null;
		// this.loadq = new createjs.LoadQueue(false, null, true); //change to this one if you will use the image src
		this.loadq.setMaxConnections(10);

		this.state = {
			updatePhotos: 0,
			updateMenu: 0,
      updatePhotoLoading: 0,
      page: Page.Home
		}
	}

	createCube(){
		// CUBE [S]
		let scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		this.renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});
		scene.background = new THREE.Color('rgb(116,119,124)');

		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		let geometry = new THREE.BoxGeometry( 2, 2, 2 );
		let material = new THREE.MeshNormalMaterial();
		let cube = new THREE.Mesh( geometry, material );
		scene.add( cube );

		this.camera.position.z = 5;

		let animate = () => {
			requestAnimationFrame( animate );
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			this.renderer.render(scene, this.camera);
		};

		animate();

		// LOGO CUBE
		if (window.innerWidth > 799) {
			this.createLogoCube();
		}
	}
	createLogoCube(){
		let scene = new THREE.Scene(),
			camera = new THREE.PerspectiveCamera( 75, 100/100, 0.1, 1000 ),
			renderer = new THREE.WebGLRenderer({'canvas': document.getElementById('logo-canvas'), 'alpha': true});
		
		renderer.setSize( 100, 100 );
		document.getElementById('main-logo-desktop').appendChild( renderer.domElement );

		const geometry = new THREE.BoxGeometry( 2, 2, 2 );
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
   
		const animateLogo = () => {
			requestAnimationFrame( animateLogo );
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

		animateLogo();
	}
	resizeCube(){
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
	}
	fetchPhotos() {
    Photos.get((photos) => {
      let thisPhotos = [], 
      photographyTemplate = [];

      for (let i = 0;i < photos.length;i++) {
        let obj = {};
          obj.id = i;
          obj.index = i;
          obj.thumbnail = `https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}_z.jpg`;
          obj.url = `https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}_b.jpg`;
          obj.src = `https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}_b.jpg`;
        thisPhotos.push(obj);
      }

      this.loadq.loadManifest(thisPhotos);
      this.loadq.addEventListener('complete', () => {
        let photosPerColumn = thisPhotos.length/4;
        for (let i = 1;i <= 4;i++) {
          let rows = [];
          for (let o = Math.floor(photosPerColumn*(i-1));o < Math.floor(photosPerColumn*i);o++) {
            rows.push(
              <img className='photo' key={o} src={thisPhotos[o].thumbnail} style={{width: '100%'}} onClick={() => this.openPhoto(thisPhotos[o].index)} />
            );
          }	

          const col = (
            <div key={i} className='photo-column'>
              {rows}
            </div>
          );
          photographyTemplate.push(col);			
        }

        this.PhotoClass.updatePhotos(photographyTemplate, () => {
          this.PhotoClass.updateOriginalPhotos(thisPhotos, () => {
            this.PhotoClass.updatePhotoLoading(false, () => {
              this.MainClass.loadingFinish(() => {
                this.setState({
                  updatePhotoLoading: this.state.updatePhotos+=1,
                  updatePhotos: this.state.updatePhotos+=1
                }, () => {
                  this.createCube();
                  // RESIZE [S]
                  window.onresize = () => {
                    this.resizeCube();
                  }
                });
              });
            });
            
          })
        });

      });

      this.loadq.addEventListener('error', () => {
        console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'error');		
      });
    });
	}
	componentDidMount(){
    this.fetchPhotos();
	}
	componentDidUpdate(prevProps, prevState){

	}
	openPhoto(index){
		this.PhotoClass.openThisPhoto(index, (thisPhoto) => {
			console.log('%c FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', thisPhoto);		
		});	
	}
	goToPage(index){
		this.setState({ page: index });
	}

	getTitle(){
		return this.MainClass.menu.map((value, index) => {
      let menuClassNames = 'header-btns left text-center c-pointer'
			if (index === this.state.page) {
        menuClassNames += ' color-white'
      }

			return(
				<label key={index} htmlFor="nav-checkbox">
					<span onClick={() => this.goToPage(index)} className={menuClassNames}>{value.title}</span>
				</label>
			);
		});		
	}

	getActiveTemplate(){
		if (this.state.page === Page.Home) {
			return <HomeComponent />
		} else if (this.state.page === Page.Information) {
			return <InformationComponent />
		} else if (this.state.page === Page.Work) {
      return <WorkComponent />
		} else {
			return <PhotographyComponent photoLoading={this.PhotoClass.photoLoading} photos={this.PhotoClass.photos}/>
		}
	}

	render(){
		const work = this.state.work;

		return(
			<React.Fragment>
				<span className='main-bg'>
					<canvas id='canvas' width='500' height='400'></canvas>	
				</span>
				{
					this.MainClass.loading
					?
					<LoadingComponent />
					:
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
							{this.getTitle()}
						</span>
							{this.getActiveTemplate()}
					</span>
				}
			</React.Fragment>
		)
	}
}

ReactDOM.render(
	<MainTemplate/>,
	document.getElementById("root")
);
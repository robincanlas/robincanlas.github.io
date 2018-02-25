import React from 'react';
import ReactDOM from 'react-dom';

import image from 'images/default.png'
import style from 'css/style.css'

import {MainApp, MetaInfoBody, MetaInfoData} from 'scripts/mainapp';
import { cube } from 'scripts/test';
// import CanvasApp from 'scripts/canvas';

let payRent = ReactDOM.render(
  <MainApp />,
  // <CanvasApp />,
  document.getElementById('root')
);

setTimeout(function() {
	let newMetaHumanFiles = [{
		img: 'https://s-media-cache-ak0.pinimg.com/564x/4d/1f/9a/4d1f9a9e63abe83c9a0c73ffa6a44df7.jpg',
		name: 'Princess Diana of Themyscira',
		ability: 'Superhuman strength, speed, durability, and longevity',
		origin: 'Themyscira'
	}, {
		img: 'https://s-media-cache-ak0.pinimg.com/236x/62/03/e3/6203e3be81ed36802b6c24b35c1a49e9.jpg',
		name: 'Zatanna Zatara',
		ability: 'Skilled and powerful user of magic',
		origin: 'Gotham City'
	}];
	
	let newData = [...payRent.state.metahumanData, ...newMetaHumanFiles];

	payRent.updateValue(newData);	
}, 2000);
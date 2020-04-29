import { Models } from 'app/models';

export const navs: Models.Navs[] = [
	{name: 'about'},
	{name: 'work'},
	{name: 'photography'},
	{name: 'contact'}
];

export const skills: Models.Skills[] = [
	{ name: 'javascript', title: 'Javascript' },
	{ name: 'typescript', title: 'Typescript' },
	{ name: 'css', title: 'CSS3' },
	{ name: 'html5', title: 'HTML5' },
	{ name: 'reactjs', title: 'ReactJS' },
	{ name: 'redux', title: 'Redux' },
	{ name: 'createjs', title: 'CreateJS' }
];

export const assetsPath: string =  '../../assets';

export const ActionTypes = {
	GET_PHOTOS_REQUEST: 'GET_PHOTOS_REQUEST',
	GET_PHOTOS_SUCCESS: 'GET_PHOTOS_SUCCESS',
	GET_PHOTOS_FAILED: 'GET_PHOTOS_FAILED'
};
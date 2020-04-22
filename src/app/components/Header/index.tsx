import * as React from 'react';
import * as style from './style.css';
import { Menu } from 'semantic-ui-react';
import { history } from 'app/utils';

export namespace Header {
	export interface Props {}
}

export const Header: React.FC<Header.Props> = (props: Header.Props) => { 
	const navs: {name: string}[] = [
		{name: 'about'},
		{name: 'work'},
		{name: 'photography'},
		{name: 'contact'}
	];
	const openTag: string = '<';
	const closeTag: string = '/>';
	const name: string = ' robin ';
	return (
		<Menu id={style.nav} className={style.nav} text>
			<Menu.Item className={style.name} onClick={() => history.push('/')} header>
				<span className={style.tag}>{openTag}</span>
				<span>{name}</span>
				<span className={style.tag}>{closeTag}</span>
			</Menu.Item>
			<Menu.Menu className={style.menu} position='right'>
				{navs.map((nav) => (
					<Menu.Item
						key={nav.name}
						name={nav.name}
						onClick={() => history.push(`/${nav.name}`)}
					/>
				))}
			</Menu.Menu>
			<Menu.Item className={style.burger} position='right'>
				<div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</Menu.Item>
		</Menu>
	);
}

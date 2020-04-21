import * as React from 'react';
import * as style from './style.css';
import { Icon } from 'semantic-ui-react';

export namespace Footer {
	export interface Props {}
}

export const Footer: React.FC<Footer.Props> = (props: Footer.Props) => { 
	return (
		<span id={style.footer}>
			<div className={style.hosting}>
				<Icon size='huge' name='github' />
				<Icon size='huge' name='bitbucket' />
			</div>
			<p>© 2020, Coded by Kristoffer Robin Canlas</p>
		</span>
	);
}

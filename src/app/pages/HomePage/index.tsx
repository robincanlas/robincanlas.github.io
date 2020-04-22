import * as React from 'react';
import * as style from './style.css';
import { Container } from 'semantic-ui-react';

export namespace HomePage {
	export interface Props {
	}
}

export const HomePage: React.FC<HomePage.Props> = (props: HomePage.Props) => {
	return (
		<Container id={style.container}>
			<span className={style.intro}>
				<span className={style.text}>
					<p>Kristoffer Robin Canlas</p>
					<p>JavaScript Developer</p>
				</span>
				<span className={style.picture}>
					<span></span>
				</span>
			</span>
		</Container>
	);
};

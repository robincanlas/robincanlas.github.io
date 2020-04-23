import * as React from 'react';
import * as style from './style.css';
import { Header } from 'semantic-ui-react';
import { history } from 'app/utils';
import { navs } from 'app/constants';

export namespace OverlayNav {
	export interface Props {
		overlayNav: boolean;

		toggleOverlay: () => void;
	}
}

export const OverlayNav: React.FC<OverlayNav.Props> = (props: OverlayNav.Props) => { 
	// const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	effect
	// 	return () => {
	// 		cleanup
	// 	};
	// }, [input]);

	const changeUrl = (nav: string) => {
		history.push(nav);
		props.toggleOverlay();
	};

	return (
		<span id={style.overlay} className={props.overlayNav ? style.open : ''}>
			<span className={style.bg}>
				<span>
					<div onClick={props.toggleOverlay} className={style.xicon}>
						<div></div>
						<div></div>
					</div>
				</span>
				<span>
					{navs.map(nav => (
						<Header 
							as='h1' 
							key={nav.name}
							onClick={() => changeUrl(`${nav.name}`)}>
							{nav.name}
						</Header>
					))}
				</span>
			</span>
		</span>
	);
};

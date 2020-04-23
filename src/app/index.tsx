import * as React from 'react';
import * as style from './style.css';
import { Route, Router, Switch } from 'react-router';
import { history } from 'app/utils';
import { Header, Footer, OverlayNav } from 'app/components';
import { HomePage, PhotoPage, AboutPage } from './pages';
import update from 'immutability-helper';

export namespace App {
	export interface Props {}

	export interface State {
		overlayNav: boolean;
	}
}

export class App extends React.Component<App.Props, App.State> {
	constructor(props: App.Props, context?: any) {
		super(props, context);

		this.state = {
			overlayNav: false
		};

		this.toggleOverlay = this.toggleOverlay.bind(this);
	}

	public toggleOverlay() {
		this.setState(update(this.state, {
			overlayNav: { $set: !this.state.overlayNav } 
		}));
	}

	public render() {
		return (
			<Router history={history}>
				<span className={style.bg}></span>
				<OverlayNav overlayNav={this.state.overlayNav} toggleOverlay={this.toggleOverlay} />
				<span className={style.content}>
					<Header toggleOverLay={this.toggleOverlay} />
					<span className={style.body}>
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/about' component={AboutPage} />
							{/* <Route path='/work' component={WorkPage} /> */}
							<Route path='/photography' component={PhotoPage} />
							{/* <Route path='/contact' component={ContactPage} /> */}
						</Switch>
					</span>
					<Footer />
				</span>
			</Router>
		);
	}
}

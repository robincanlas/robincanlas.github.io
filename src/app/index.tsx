import * as React from 'react';
import * as style from './style.css';
import { Route, Router, Switch } from 'react-router';
import { history } from 'app/utils';
import { Header, Footer } from 'app/components';
import { HomePage, PhotoPage } from './pages';

export namespace App {
	export interface Props {

	}

	export interface State {

	}
}

export class App extends React.Component<App.Props, App.State> {
	constructor(props: App.Props, context?: any) {
		super(props, context);

		this.state = {};
	}

	public render() {
		return (
			<Router history={history}>
				<Header />
				<span className={style.body}>
					<Switch>
						<Route exact path='/' component={HomePage} />
						{/* <Route path='/about' component={AboutPage} />
						<Route path='/work' component={WorkPage} /> */}
						<Route path='/photography' component={PhotoPage} />
						{/* <Route path='/contact' component={ContactPage} /> */}
					</Switch>
				</span>
				<Footer />
			</Router>
		);
	}
}

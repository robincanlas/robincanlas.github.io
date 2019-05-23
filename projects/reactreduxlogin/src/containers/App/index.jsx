import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { history } from '../../helpers';
import { alertActions } from '../../actions';
import { PrivateRoute } from '../../components/PrivateRoute';
import { HomePage} from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { ComicPage } from '../ComicPage';

class App extends React.Component {
    constructor(props) {
        super(props)

        const { dispatch } = this.props
        history.listen((location, action) => {
            dispatch(alertActions.clear())
        })
    }

    render() {
        const { alert } = this.props
        return (
            <div className="jumbotron">
                <div className="container">
                    <div>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute path="/comics" component={ComicPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    alert: PropTypes.shape({
        message: PropTypes.string,
        type: PropTypes.string
    })
}

const mapStateToProps = (state) => {
    const { alert } = state;
    return {
        alert
    }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }
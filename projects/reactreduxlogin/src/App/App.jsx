import React from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../helpers'
import { alertActions } from '../actions'
import { PrivateRoute } from '../components/PrivateRoute'
import { HomePage} from '../HomePage/HomePage'
import { LoginPage } from '../LoginPage/LoginPage'
import { RegisterPage } from '../RegisterPage/RegisterPage'

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
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
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

const mapStateToProps = (state) => {
    const { alert } = state;
    return {
        alert
    }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }
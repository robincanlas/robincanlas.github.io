import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { HeaderPage } from '../containers/HeaderPage';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => (
            localStorage.getItem('user')
                ? 
                    <React.Fragment>
                        <HeaderPage {...props} />
                        <Component {...props} />
                    </React.Fragment>
                : 
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )}
    />
)
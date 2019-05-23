import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HeaderPage extends React.Component {
    render() {
        const { user } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <Link to="/">Home</Link>
                <Link to="/comics">Comics</Link>
                <h1>HELLO {user.firstName}!</h1>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { authentication } = state
    const { user } = authentication
    return {
        user
    }
}


const connectedHeaderPage = connect(mapStateToProps)(HeaderPage);
export { connectedHeaderPage as HeaderPage };
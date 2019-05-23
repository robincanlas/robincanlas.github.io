import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../../actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id))
    }

    render() {
        const { users } = this.props
        return (
            <React.Fragment>
                <div className="col-md-6 col-md-offset-3">
                    <p>You're logged in with React!!</p>
                    <h3>All registered users:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.items &&
                        <ul>
                            {users.items.map((user, index) =>
                                <li key={user.id}>
                                    {user.firstName + ' ' + user.lastName}
                                    {
                                        user.deleting ? <em> - Deleting...</em>
                                        : user.deleteError ? <span className="error"> - ERROR: {user.deleteError}</span>
                                        : <span> - <button  onClick={this.handleDeleteUser(user.id)}>Delete</button></span>
                                    }
                                </li>
                            )}
                        </ul>
                    }
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            </React.Fragment>

        )
    }
}

HomePage.propTypes = {
    users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    const { users } = state
    return {
        users
    }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
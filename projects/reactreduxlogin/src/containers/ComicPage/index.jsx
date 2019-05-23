import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { comicActions } from '../../actions';

class ComicPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(comicActions.getAll());
        
    }

    render() {
        const { users } = this.props;
        return(
            <React.Fragment>
                <span>COMIC PAGE</span>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        One of three columns
                        </div>
                        <div className="col-sm">
                        One of three columns
                        </div>
                        <div className="col-sm">
                        One of three columns
                        </div>
                    </div>
                    {/* {users.map((val, index) => {

                    })} */}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { comics } = state
    return {
        comics
    }
}


const connectedComicPage = connect(mapStateToProps)(ComicPage);
export { connectedComicPage as ComicPage };
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';

class Header extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <AppBar/>
                {/*<h1>{this.props.name}</h1>*/}
            </div>
        )
    }
}

export default Header;
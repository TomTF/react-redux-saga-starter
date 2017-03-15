import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationLink extends Component {
    style() {
        return {textDecoration: 'none'}
    }

    activeStyle() {
        return {backgroundColor: 'red', color: 'red'}
    }

    render() {
        return (
            <Link to={this.props.to} style={this.style()}>
                {this.props.children}
            </Link>
        )
    }
}

NavigationLink.propTypes = {
    to: React.PropTypes.string,
    children: React.PropTypes.any
};

export default NavigationLink;
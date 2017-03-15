import React, { Component } from 'react';
import {CircularProgress} from 'material-ui';

class LoadingIndicator extends Component {
    render() {
        return (
            <CircularProgress {...this.props} size={30} />
        );
    }
}

export default LoadingIndicator;
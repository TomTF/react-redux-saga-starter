import React, {Component} from 'react';
import {TextField as TextFieldMaterial} from 'material-ui';

class TextField extends Component {

    render() {
        return (<TextFieldMaterial {...this.props} />);
    }
}

export default TextField;
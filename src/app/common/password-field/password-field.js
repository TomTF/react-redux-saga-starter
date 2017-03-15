import React, {Component} from 'react';
import {TextField as TextFieldMaterial} from 'material-ui';

class TextField extends Component {

    render() {
        return (<TextFieldMaterial
            type="password"
            {...this.props} />);
    }
}

export default TextField;
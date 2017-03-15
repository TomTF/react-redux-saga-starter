import React, {Component} from 'react';
import {FlatButton} from 'material-ui';

class Button extends Component {
    render() {
        return (<FlatButton onClick={() => this.props.onClick()} 
            label={this.props.label} 
            primary={this.props.primary}/>);
    }
}

export default Button;
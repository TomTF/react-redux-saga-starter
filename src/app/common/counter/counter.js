import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';

class Counter extends Component {
    render() {
        return (
            <div>
                <RaisedButton label="Count up" onClick={() => this.increment()}/>
                <h1>{this.props.count}</h1>
            </div>
        )
    }

    increment() {
        this
            .props
            .increment();
    }
}

export default Counter;
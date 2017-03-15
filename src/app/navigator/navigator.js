import {Component} from 'react';

class Navigator extends Component {
    render() {
        return null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.routeName) {
            this
                .props
                .history
                .push(nextProps.routeName);
        }
    }
}

export default Navigator;
import React, {Component} from 'react';
import {Route} from 'react-router';
import {AppBar} from 'material-ui';
import Drawer from './drawer';

import Locations from './locations/locations';
import Users from './users/users';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: true
        };

        
    }

    render() {
        return (
            <div>
                <Drawer drawerOpen={this.state.drawerOpen} basePath={this.props.match.url} />
                <div style={this.contentStyle()}>
                    <AppBar onLeftIconButtonTouchTap={() => this.toggleDrawer()}/>
                    <div style={{
                        padding: 10
                    }}>
                        <Route path={`${this.props.match.url}Locations`} component={Locations} />
                        <Route path={`${this.props.match.url}Users`} component={Users} />
                    </div>
                </div>
            </div>
        );
    }

    toggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }

    contentStyle() {
        return {
            marginLeft: this.state.drawerOpen
                ? 256
                : 0,
            transition: '450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
        };
    }
}

export default Main;
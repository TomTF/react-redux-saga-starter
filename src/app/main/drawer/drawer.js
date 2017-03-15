import React, {Component} from 'react';
import {NavigationLink} from '../../common';
import {Drawer as MaterialDrawer, MenuItem, AppBar} from 'material-ui';
import UserIcon from './user-icon/user-icon';

class Drawer extends Component {
    render() {
        return (
            <MaterialDrawer open={this.props.drawerOpen}>
                <AppBar title={this.props.userName} iconElementLeft={< UserIcon onLogout={this.props.logout} />}/>
                <NavigationLink to={`${this.props.basePath}Locations`}>
                    <MenuItem>Locations</MenuItem>
                </NavigationLink>
                <NavigationLink to={`${this.props.basePath}Users`}>
                    <MenuItem>Users</MenuItem>
                </NavigationLink>
            </MaterialDrawer>
        )
    }
}

Drawer.propTypes = {
    drawerOpen: React.PropTypes.bool,
    basePath: React.PropTypes.string
};

export default Drawer;
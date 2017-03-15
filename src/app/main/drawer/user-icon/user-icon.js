import React, {Component} from 'react';

import {IconButton, FontIcon, IconMenu, MenuItem} from 'material-ui';

class UserIcon extends Component {
    render() {
        return (
            <IconMenu
                iconButtonElement={
                    <IconButton iconStyle={{
                        color: 'white'
                    }}>
                        <FontIcon className="material-icons">account_circle</FontIcon>
                    </IconButton>}
                targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                <MenuItem primaryText="Logout" onClick={this.props.onLogout}/>
            </IconMenu>
        );
    }
}

export default UserIcon;
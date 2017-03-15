import {LoginActions} from './../../login/login.actions';
import {connect} from 'react-redux';
import Drawer from './drawer';

const mapStateToProps = (state) => {
    return {
        userName: state.authentication.user.userName
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(LoginActions.logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
import { connect } from 'react-redux';
import { LoginActions } from './login.actions';
import Login from './login';

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(LoginActions.login(credentials)),
    };
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authentication.loggedIn,
        userName: state.authentication.userName,
        errorMessage: state.authentication.errorMessage,
        loading: state.authentication.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
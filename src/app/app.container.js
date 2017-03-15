import {connect} from 'react-redux';
import App from './app';
import {navigate} from './navigator/navigator.actions';

const mapStateToProps = (state) => {
    return {loggedIn: state.authentication.loggedIn}
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigateToLogin: () => dispatch(navigate('/Login'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
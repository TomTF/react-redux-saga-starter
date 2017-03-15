import {connect} from 'react-redux';
import Navigator from './navigator';

const mapStateToProps = (state) => {
  return {
      routeName: state.navigator.route,
      loggedIn: state.authentication.loggedIn
    }
}

export default connect(mapStateToProps)(Navigator);
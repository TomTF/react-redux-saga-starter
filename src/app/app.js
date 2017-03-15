import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, Redirect} from 'react-router';

import Main from './main';
import Login from './login';
import Navigator from './navigator';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this
        .props
        .navigateToLogin();
    }
  }

  render() {
    const loggedIn = this.props.loggedIn;

    // HomeRoute prevents rendering of Main-Component when pathname is /Login
    const SecureHomeRoute = ({
      component: Component,
      ...rest
    }) => (
      <Route
        {...rest}
        render={props => {
        if (props.location.pathname !== '/Login') {
          if (!loggedIn) {
            return <Redirect to='/Login'/>
          }
          return <Component {...props}/>;
        }
        return null;
      }}/>
    )

    return (
      <Router history={this.props.history}>
        <MuiThemeProvider>
          <div>
            <Navigator history={this.props.history}/>
            <Route path='/Login' component={Login}/>
            <SecureHomeRoute path='/' component={Main}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
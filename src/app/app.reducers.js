import {counterIncrement} from './common/counter/counter.reducers';
import loginReducer from './login/login.reducers';
import navigatorReducer from './navigator/navigator.reducers';

const appReducers = {
    counter: counterIncrement,
    authentication: loginReducer,
    navigator: navigatorReducer
};

export default appReducers;
import {LoginTypes} from './login.actions';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({user: {}, accessToken: '', loggedIn: false, loading: false, errorMessage: null});

const login = (state, action) => {
    return state.merge({errorMessage: null, loading: true});
}

const logout = (state, action) => {
    return INITIAL_STATE;
}

const loginSucceeded = (state, {user, accesstoken}) => {
    return state.merge({loggedIn: true, user: user, accessToken: accesstoken, errorMessage: null, loading: false});
}

const loginFailed = (state, {message}) => {
    return state.merge({errorMessage: message, accessToken: null, user: {}, loading: false});
}

const ACTION_HANDLERS = {
    [LoginTypes.LOGIN]: login,
    [LoginTypes.LOGOUT]: logout,
    [LoginTypes.LOGIN_FAILED]: loginFailed,
    [LoginTypes.LOGIN_SUCCEEDED]: loginSucceeded
}

export default function reducers(state = INITIAL_STATE, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler
        ? handler(state, action)
        : state
}
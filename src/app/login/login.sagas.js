import {apply, put} from 'redux-saga/effects';
import {LoginTypes} from "./login.actions"
import {NavigatorTypes} from '../navigator/navigator.actions';

export function * login(authApi, {credentials}) {
    try {
        let response = yield apply(authApi, authApi.login, [credentials.userName, credentials.password]);
        if (response.errorCode) {
            yield put({
                type: LoginTypes.LOGIN_FAILED,
                message: response.message || 'Failed to login.'
            });
        } else {
            let {user, accesstoken} = response;
            yield put({type: LoginTypes.LOGIN_SUCCEEDED, user, accesstoken});
            yield put({type: NavigatorTypes.NAVIGATE, route: '/'});
        }
    } catch (e) {
        yield put({type: LoginTypes.LOGIN_FAILED, message: 'Failed to login.'});
    }
}

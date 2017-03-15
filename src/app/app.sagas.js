import {LoginTypes} from './login/login.actions';
import {login} from './login/login.sagas';
import {takeEvery, select} from 'redux-saga/effects';
import {AuthorizationApi} from './api';

const apiHost = 'http://localhost:8064';
const tokenProvider = () => select(state => state.authorization.accessToken);
const authApi = new AuthorizationApi(apiHost, tokenProvider);

export default function * rootSaga() {
    yield [
        takeEvery(LoginTypes.LOGIN, login, authApi)
    ] 
}
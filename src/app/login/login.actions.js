export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function logout(){
    return {
        type: LOGOUT
    }
}

export function login(credentials){
    return {
        type: LOGIN,
        credentials
    }
}

export function login_succeeded(user){
    return {
        type: LOGIN_SUCCEEDED,
        user
    }
}

export function login_failed(error){
    return {
        type: LOGIN_FAILED,
        error
    }
}

export const LoginTypes = {LOGIN, LOGOUT, LOGIN_FAILED, LOGIN_SUCCEEDED};
export const LoginActions = {login, logout, login_succeeded, login_failed};
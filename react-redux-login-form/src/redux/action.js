import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes'

export function setLoginPending(isLoggedPending){
    return {
        type: LOGIN_PENDING,
        isLoggedPending
    };
}

export function setLoginSuccess(isLoggedSuccess){
    return {
        type: LOGIN_SUCCESS,
        isLoggedSuccess
    };
}

export function setLoginError(loggedError){
    return {
        type: LOGIN_ERROR,
        loggedError
    };
}
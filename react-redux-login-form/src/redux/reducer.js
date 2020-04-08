import { setLoginPending, setLoginSuccess, setLoginError } from './action';
import Promise from 'es6-promise';

export function login(email, password){
 return dispatch => {
     dispatch(setLoginPending(true));
     dispatch(setLoginSuccess(false));
     dispatch(setLoginError(null));

     sendLoginRequest(email, password)
     .then(success =>{
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
     })
     .catch(err =>{
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err)); 
     });
 };
}

const initialState = {
    isLoggedPending: false,
    isLoggedSuccess: false,
    loggedError: null
}
export default function reducer(initialState, action){
switch(action.type){
    case 'LOGIN_PENDING':
    return {
        ...initialState,
        isLoggedPending: action.isLoggedPending 
    };
    case 'LOGIN_SUCCESS':
    return {
        ...initialState,
        isLoggedSuccess: action.isLoggedSuccess 
    };
    case 'LOGIN_ERROR':
    return {
        ...initialState,
        loggedError: action.loggedError 
    };
    default:
    return initialState;
}
}

function sendLoginRequest(email, password){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(email==='admin@example.com' && password==='admin'){
                return resolve(true);
            }
            else{
                return reject(new Error('Invalid Email or Password')); 
            }
        }, 2000)
    })
}
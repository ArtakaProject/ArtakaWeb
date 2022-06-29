import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiUser from '../../api/api-user'
import {  
    doSignupSucceed,doSignupFailed,
    doSigninSucceed,doSignoutSucceed,
    doShowAuthMessage
} from '../actions/User';

function* handleSignup(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signup,payload);
        yield put(doSignupSucceed(result.data));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

function* handleSignin(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signin,payload);
        if (result.message.includes('invalid')){
            yield put(doShowAuthMessage({message : 'invalid user or password'}));
        }
        else{
            yield put(doSigninSucceed(result));
            window.localStorage.setItem('@token', result.fcm_token);
            window.localStorage.setItem('@profile', JSON.stringify(result));         
        }
    
    } catch (error) {
        yield put(doShowAuthMessage({message : 'invalid user or password'}));
    }
}

function* handleSignout(action) {
    const {payload} = action;
    try {
        window.localStorage.clear();
        yield put(doSignoutSucceed(payload));
        window.location.reload();
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

export  {
    handleSignup,
    handleSignin,
    handleSignout
}
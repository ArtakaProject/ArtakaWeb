import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';
import apiCustomer from '../../api/api-customer';
import {  
    doGetCustomerRequest,doGetCustomerSucceed,
    doGetCustomerFailed
} from '../actions/Customer';

function* handleGetCustomer(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCustomer.findAll,payload);
        yield put(doGetCustomerSucceed(result));
    } catch (error) {
        yield put(doGetCustomerFailed(error));
    }
}

export  {
    handleGetCustomer
}

import {
    all, call, fork, put, takeEvery, takeLatest
} from 'redux-saga/effects';
import apiProduct from '../../api/api-product'
import {
     doGetProductSucceed, doProductFailed
} from '../actions/Product';

function* handleGetProduct(action) {
    const { payload } = action;
    try {
        const result = yield call(apiProduct.findAll, payload);
        yield put(doGetProductSucceed(result.data)); //.data
    } catch (error) {
        yield put(doProductFailed(error));
    }
}

export {
    handleGetProduct
}
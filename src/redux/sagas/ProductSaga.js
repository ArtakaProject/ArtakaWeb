import {
    all, call, fork, put, takeEvery, takeLatest
} from 'redux-saga/effects';

import apiProduct from '../../api/api-product'
import {
    doGetProductRequest, doGetProductSucceed, doProductFailed,
    doAddProductSucceed, doEditProductSucceed
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

function* handleAddProduct(action) {
    const { payload } = action;
    try {
        const result = yield call(apiProduct.addProduct, payload);
        yield put(doAddProductSucceed(result.data[0]));
    } catch (error) {
        yield put(doProductFailed(error));
    }
}

function* handleUpdateProduct(action) {
    const { payload } = action;
    try {
        const result = yield call(apiProduct.editProduct, payload);
        const data = result.data[1][0];
        yield put(doEditProductSucceed(data));
    } catch (error) {
        yield put(doProductFailed(error));
    }
}


export {
    handleAddProduct,
    handleGetProduct,
    handleUpdateProduct
}
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import apiProduct from "../../api/api-product";
import { doGetProductSucceed, doProductFailed } from "../actions/Product";

function* handleGetProduct(action) {
  const { payload } = action;
  try {
    const result = yield call(apiProduct.findAll, payload);
    yield put(doGetProductSucceed(result.data)); //.data
    window.localStorage.setItem('@product', JSON.stringify(result.data));

  } catch (error) {
    yield put(doProductFailed(error));
  }
}

function* handleGetProdctCtgry(action) {
  const { payload } = action;
  try {
    const result = yield call(apiProduct.findProdCtgry, payload.category);
    yield put(doGetProductSucceed(result.data)); //.data
    window.localStorage.setItem('@product', JSON.stringify(result.data));


  } catch (error) {
    yield put(doProductFailed(error));
  }
}

export { 
  handleGetProduct,
  handleGetProdctCtgry 
};

import { takeEvery, all } from 'redux-saga/effects';
import * as ActionType from '../constants/Category';
import * as ActionTypeUser from '../constants/User';
import *  as ActionTypeProduct from '../constants/Product'
import { 
  handleGetCategory,
  handleCreateCategory,
  handleUpdateCategory, 
  handleDeleteCategory,
} from '../sagas/CategorySaga';

import { 
  handleAddProduct,handleGetProduct, handleUpdateProduct
} from '../sagas/ProductSaga';

import {handleSignup,handleSignin,handleSignout} from '../sagas/UserSaga'

function *watchAll() {
  yield all([
    takeEvery(ActionType.GET_CATEGORY_REQUEST, handleGetCategory),
    takeEvery(ActionType.CREATE_CATEGORY_REQUEST, handleCreateCategory),
    takeEvery(ActionType.UPDATE_CATEGORY_REQUEST, handleUpdateCategory),
    takeEvery(ActionType.DELETE_CATEGORY_REQUEST, handleDeleteCategory),
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleGetProduct),
    takeEvery(ActionTypeProduct.ADD_PRODUCT_REQUEST, handleAddProduct),
    takeEvery(ActionTypeProduct.UPDATE_PRODUCT_REQUEST, handleUpdateProduct),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout)
  ])
}

export default watchAll;



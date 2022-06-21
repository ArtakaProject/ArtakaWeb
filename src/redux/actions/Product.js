import * as ActionType from '../constants/Product'

export const doGetProductRequest = (payload) => ({
    type: ActionType.GET_PRODUCT_REQUEST,
    payload,
});

export const doGetProductSucceed = (payload) => ({
    type: ActionType.GET_PRODUCT_SUCCEED,
    payload,
});

export const doProductFailed = (payload) => ({
    type: ActionType.GET_PRODUCT_FAILED ,
    payload,
});


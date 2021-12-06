import * as ActionType from '../constants/Customer'

export const doGetCustomerRequest = (payload) => ({
    type: ActionType.GET_CUSTOMER_REQUEST,
    payload,
});

export const doGetCustomerSucceed = (cos) => ({
    type: ActionType.GET_CUSTOMER_SUCCEED,
    payload: cos,
});

export const doGetCustomerFailed = (payload) => ({
    type: ActionType.GET_CUSTOMER_FAILED ,
    payload,
});

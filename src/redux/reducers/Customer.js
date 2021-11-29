import * as ActionType from '../constants/Customer';

const INIT_STATE = {
    customer: [],
    isLoading: false,
    status: false,
    error: null,
    redirect: false
}

const customerReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CUSTOMER_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_CUSTOMER_FAILED: {
            return {
                isLoading: false,
                error: action.payload.error,
            }
        }
        case ActionType.GET_CUSTOMER_SUCCEED: {
            return applyGetCustomerSucceed(state, action)
        }

        default:
            return state;
    }

}

const applyGetCustomerSucceed = (state, action) => {
    return {
        ...state,
        customer: action.payload,
        isLoading: false
    }
}

export default customerReducer

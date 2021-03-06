import * as ActionType from '../constants/Product';


const INIT_STATE = {
    products: [],
    isLoading: false,
    status: false,
    error: null,
    redirect: false,
};

const productReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_PRODUCT_FAILED: {
            return {
                isLoading: false,
                error: action.payload.error,
            }
        }
        case ActionType.GET_PRODUCT_SUCCEED: {
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        }

        default:
            return state;
    }
};


export default productReducer;
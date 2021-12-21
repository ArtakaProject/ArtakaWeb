import * as ActionType from '../constants/Product';

/* {
    id: "",
    create_dtm: "",
    sku_id: "",
    user_id: "",
    outlet_id: "",
    name: "",
    category: "",
    variant: "",
    units: "",
    weight: 0,
    quantity: 0,
    minimum_quantity: 0,
    description: "",
    buy_cost: 0,
    sell_cost: 0,
    modifiers_id: "",
    images: [],
    rawmaterial: [],
    is_stock_tracked: "",
    number_sold: 0,
    outlets: [],
    buy_cost_discounted: 0,
    is_active: "",
    wholesaler_cost: []
} remain_stock: 0, */

const INIT_STATE = {
    products: [],
    isLoading: false,
    status: false,
    error: null,
    redirect: false
}

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
            /* return applyGetProductSucceed(state, action) */
        }
        case ActionType.ADD_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.ADD_PRODUCT_SUCCEED: {
            return applyAddProductSucceed(state, action)
        }

        case ActionType.UPDATE_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ActionType.UPDATE_PRODUCT_SUCCEED: {
            return applyEditProductSucceed(state, action);
        }
        default:
            return state;
    }

}

/* const applyGetProductSucceed = (state, action) => {
    return {
        ...state,
        products: action.payload,
        isLoading: false
    }
} */

const applyAddProductSucceed = (state, action) => {
    const { payload } = action;
    const remain_stock = remain_stock + (payload.quantity - payload.number_sold);
    return {
        ...state,
        products: [...state.products, payload],
        remain_stock: payload.remain_stock,
        isLoading: false,
        redirect: true
    }
}

const applyEditProductSucceed = (state, action) => {
    const { payload } = action;
    const product = state.products.map(prod => {
        if (prod.id === payload.id) {
            prod.images = [...state, payload.images];
            prod.name = payload.name;
            prod.category = payload.category;
            prod.units = payload.units;
            prod.sell_cost = payload.sell_cost;
            prod.sku_id =payload.sku_id;
            prod.buy_cost = payload.buy_cost;
            prod.weight = payload.weight;
            prod.quantity = payload.quantity;
            prod.minimum_quantity = payload.minimum_quantity;
            prod.is_active = payload.is_active;
            prod.variant = payload.variant;
            prod.rawmaterial = [...state, payload.rawmaterial];
            prod.is_stock_tracked = payload.is_stock_tracked;
            prod.description = payload.description;
            prod.outlets = [...state, payload.outlets];
            return prod;
        }
        return prod;
    });
    return {
        ...state,
        product,
        succeed: true
    };
}

export default productReducer;
import * as ActionType from '../constants/Cart';


const INIT_STATE = {
    products : [],
    totalProduct : 0
}

const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            return {
                ...state,
                totalProduct: state.totalProduct+1
            }
        }
       
        default:
            return state;
    }

}

export default cartReducer
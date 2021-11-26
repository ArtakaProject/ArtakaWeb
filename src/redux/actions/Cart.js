import * as ActionType from '../constants/Cart'


export const doAddToCart = (payload) => ({
    type: ActionType.ADD_TO_CART,
    payload,
});
import { combineReducers } from 'redux';
import categoryReducer from './Category';
import userReducer from './User';
import productReducer from './Product';
import cartReducer from './Cart';

const rootReducer = combineReducers({
  categoryState: categoryReducer,
  userState : userReducer,
  productState : productReducer,
  cartState : cartReducer
});

export default rootReducer;
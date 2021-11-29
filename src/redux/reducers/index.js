import { combineReducers } from 'redux';
import categoryReducer from './Category';
import userReducer from './User';
import productReducer from './Product';
import cartReducer from './Cart';
import customerReducer from './Customer';

const rootReducer = combineReducers({
  categoryState: categoryReducer,
  userState : userReducer,
  productState : productReducer,
  cartState : cartReducer,
  customerState : customerReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { userReducer } from './userReducer';
import { offerReducer } from './offerReducer';
import { itemReducer } from './itemReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  currentUser: userReducer,
  orders: orderReducer,
  offers: offerReducer,
  items: itemReducer,
  form: formReducer,
});

import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { userReducer } from './userReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  currentUser: userReducer,
  orders: orderReducer,
  form: formReducer
});
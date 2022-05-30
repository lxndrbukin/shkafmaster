import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  orders: orderReducer,
  form: formReducer
});
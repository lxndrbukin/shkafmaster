import axios from 'axios';

export const createUser = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/users', { ...formValues });
  dispatch({ type: 'CREATE_USER', payload: res.data });
};

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const fetchOrders = () => async (dispatch) => {
  const res = await axios.get('/api/orders');
  dispatch({ type: 'FETCH_ORDERS', payload: res.data });
};

export const makeOrder = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/orders', { ...formValues });
  dispatch({ type: 'MAKE_ORDER', payload: res.data });
};

export const addItem = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/items', { ...formValues });
  dispatch({ type: 'ADD_ITEM', payload: res.data });
};

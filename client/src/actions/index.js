import axios from 'axios';

export const fetchOrders = () => async (dispatch) => {
  const res = await axios.get('/api/orders');
  console.log(res.data);
  dispatch({ type: 'FETCH_ORDERS', payload: res.data });
}

export const makeOrder = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/orders', { ...formValues });
  console.log(res.data);
  dispatch({ type: 'MAKE_ORDER', payload: res.data });
}

export const addItem = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/items', { ...formValues });
  console.log(res.data);
  dispatch({ type: 'ADD_ITEM', payload: res.data });
}
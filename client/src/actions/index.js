import axios from 'axios';

export const createUser = (formValues) => async (dispatch) => {
  const res = await axios.post('/register', { ...formValues });
  dispatch({ type: 'CREATE_USER', payload: res.data });
};

export const loginUser = (formValues) => async (dispatch) => {
  const res = await axios.post('/auth', { ...formValues });
  dispatch({ type: 'LOGIN_USER', payload: res.data });
};

export const changeUserData = (formValues) => async (dispatch) => {
  const res = await axios.put('/api/current_user', { ...formValues });
  dispatch({ type: 'CHANGE_USER_DATA', payload: res.data });
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get('/api/logout');
  dispatch({ type: 'LOGOUT_USER', payload: res.data });
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

export const addOffer = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/offers', { ...formValues });
  dispatch({ type: 'ADD_OFFER', payload: res.data });
};
export const fetchOffers = () => async (dispatch) => {
  const res = await axios.get('/api/offers');
  dispatch({ type: 'FETCH_OFFERS', payload: res.data });
};

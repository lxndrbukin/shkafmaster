import axios from 'axios';

export const makeOrder = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/orders', {...formValues});
  console.log(res.data);
  dispatch({ type: 'MAKE_ORDER', payload: res.data });
}
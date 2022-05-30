import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const makeOrder = (formValues) => async (dispatch) => {
  const res = await axios.post('/api/orders', {...formValues});
  console.log(res.data);
  dispatch({ type: 'MAKE_ORDER', payload: res.data });
}
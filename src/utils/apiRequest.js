import Axios from '../interceptors/http';
import { baseUrl } from './backendUrl';


let response;

export const apiRequest = (
  start,
  method,
  data,
  failure,
  success,
  end,
  url,
  config = null
) => async (dispatch) => {
  dispatch({ type: start });
  try {
    switch (method) {
      case 'post':
        response = await Axios.post(`${baseUrl}/${url}`, data, config);
        dispatch({ type: success, payload: response.data });
        break;
      case 'get':
        response = await Axios.get(`${baseUrl}/${url}`, config);
        dispatch({ type: success, payload: response.data });
        break;

      default:
        break;
    }
  } catch (error) {
    const err = error.response ? error.response.data : error;
    dispatch({ type: failure, payload: err });
  }
  dispatch({ type: end });
};

  
import * as type from '../actionTypes/authTypes';
import { apiRequest } from '../../utils/apiRequest';

export const userSignup = ( user_name, password, display_name, role_id ) => async (dispatch) => {
    dispatch(apiRequest(
        type.SIGN_UP_START,
        'post',
        { user_name, password, display_name, role_id  },
        type.SIGN_UP_FAILURE,
        type.SIGN_UP_SUCCESS,
        type.SIGN_UP_END,
        'users/signup'
    ))
};

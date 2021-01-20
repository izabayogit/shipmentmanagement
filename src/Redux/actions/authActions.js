  
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

export const userSignin = ( username, password ) => async (dispatch) => {
    dispatch(apiRequest(
        type.SIGN_IN_START,
        'post',
        { username, password  },
        type.SIGN_IN_FAILURE,
        type.SIGN_IN_SUCCESS,
        type.SIGN_IN_END,
        'users/login'
    ))
};


export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('authToken');
    return dispatch({type: type.LOGOUT_USER});
};

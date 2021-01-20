import * as type from '../actionTypes/customerTypes';
import { apiRequest } from '../../utils/apiRequest';


export const createCustomer = ( name, phone, contact, email ) => async (dispatch) => {
    dispatch(apiRequest(
        type.CREATE_CUSTOMER_START,
        'post',
        { name, phone, contact, email  },
        type.CREATE_CUSTOMER_FAILURE,
        type.CREATE_CUSTOMER_SUCCESS,
        type.CREATE_CUSTOMER_END,
        'customers/create',
        { isAuthenticated: true }
    ))
};


export const getCustomers = () => async (dispatch) => {
    dispatch(apiRequest(
        type.GET_CUSTOMERS_START,
        'get',
        null,
        type.GET_CUSTOMERS_FAILURE,
        type.GET_CUSTOMERS_SUCCESS,
        type.GET_CUSTOMERS_END,
        'customers',
        { isAuthenticated: true }
    ))
};

import * as type from '../actionTypes/customerTypes';
import {customerInitialStates} from '../initialStates/customerInitialState';

const initialState = customerInitialStates;

export default function (state = initialState, action) {
    switch (action.type) {
        case type.CREATE_CUSTOMER_START:
            return {
                ...state,
                newCustomer: {
                    loading: true,
                    success: false,
                    data: null,
                    error: null,
                },
            };
            case type.CREATE_CUSTOMER_SUCCESS:
                return {
                    ...state,
                    newCustomer: {
                        loading: false,
                        success: true,
                        data: action.payload,
                        error: null,
                    },
                };
            case type.CREATE_CUSTOMER_FAILURE:  
                return {
                    ...state,
                    newCustomer: {
                        loading: false,
                        success: false,
                        data: null,
                        error: action.payload,
                    },
                };
            case type.CREATE_CUSTOMER_END:
                return {
                    ...state,
                    newCustomer: {...state.newCustomer },
                };
                case type.GET_CUSTOMERS_START:
            return {
                ...state,
                allCustomers: {
                    loading: true,
                    success: false,
                    data: null,
                    error: null,
                },
            };
            case type.GET_CUSTOMERS_SUCCESS:
                return {
                    ...state,
                    allCustomers: {
                        loading: false,
                        success: true,
                        data: action.payload,
                        error: null,
                    },
                };
                case type.GET_CUSTOMERS_FAILURE:  
                return {
                    ...state,
                    allCustomers: {
                        loading: false,
                        success: false,
                        data: null,
                        error: action.payload,
                    },
                };
                case type.GET_CUSTOMERS_END:
                    return {
                        ...state,
                        allCustomers: {...state.allCustomers },
                    };
                default:
                    return state;
        }
    }

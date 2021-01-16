import * as type from '../actionTypes/authTypes';
import { authInitialStates } from '../initialStates/authInitialStates';
const initState = authInitialStates;

export default function (state = initState, action) {
    switch (action.type) {
        case type.SIGN_UP_START:
            return {
                ...state,
                user_signup: {
                    loading: true,
                    success: false,
                    data: null,
                    error: null,
                },
            };
        case type.SIGN_UP_SUCCESS:
            return {
                ...state,
                user_signup: {
                    loading: false,
                    success: true,
                    data: action.payload,
                    error: null,
                },
            };
        case type.SIGN_UP_FAILURE:  
            return {
                ...state,
                user_signup: {
                    loading: false,
                    success: false,
                    data: null,
                    error: action.payload,
                },
            };
        case type.SIGN_UP_END:
            return {
                ...state,
                user_signup: {...state.user_signup },
            };


            case type.SIGN_IN_START:
            return {
                ...state,
                currentUser: {
                    loading: true,
                    success: false,
                    data: null,
                    error: null,
                },
            };
        case type.SIGN_IN_SUCCESS:
            localStorage.setItem('authToken', action.payload.token);
            return {
                ...state,
                currentUser: {
                    loading: false,
                    success: true,
                    data: action.payload,
                    error: null,
                },
            };
        case type.SIGN_IN_FAILURE:  
            return {
                ...state,
                currentUser: {
                    loading: false,
                    success: false,
                    data: null,
                    error: action.payload,
                },
            };
        case type.SIGN_IN_END:
            return {
                ...state,
                currentUser: {...state.currentUser },
            };
            default:
                return state;
        }
    }

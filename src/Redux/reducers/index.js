import authReducer from './authReducer';
import { combineReducers } from 'redux';
import customerReducer from './customerReducer'

export default combineReducers ({ 
    authReducer,
    customerReducer 
})

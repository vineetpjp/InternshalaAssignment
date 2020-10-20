import { 
    LOGIN_FAIL,
    LOGOUT,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOAD_USER,
    AUTH_ERROR
 } from '../actions/types';

 const InitialState = {
     isAuthenticated : null,
     isLoading: null,
     user : null ,
     token : localStorage.getItem('token')
 }

 export default (state = InitialState, action) => {
     const {type,payload} = action;
     switch (type) {
         case LOAD_USER:
            return {
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            const token = localStorage.setItem('token', payload.token);
            return {
                ...state,
                token,
                isLoading:false,
                isAuthenticated:true
            }
        case LOGOUT:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                isAuthenticated : null,
                isLoading: null,
                user : null ,
                token : null
            }
         default:
             return state;
     }
 }


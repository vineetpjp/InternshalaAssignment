import { AUTH_ERROR,LOAD_USER,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS,REGISTER_FAIL, LOGOUT } from './types'
import setAuthToken from "../utils/setAuthToken";
import history from '../history'
import axios from 'axios'
import { setAlert } from './alert';


//LOAD USER
export const loadUser = () => async (dispatch) => {
    if(localStorage.token)
        setAuthToken(localStorage.token);
    
    try {
        const response = await axios.get('/api/auth/accountDetails');
        dispatch({ type: LOAD_USER, payload: response.data });
    } catch (err) {
        if (!localStorage.token) {
        dispatch({ type: AUTH_ERROR });
        }
    }
}

//REGISTER USER

export const register = (formData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/register',formData);
        dispatch({type: REGISTER_SUCCESS ,payload:response.data});
        dispatch(loadUser());
        if(formData.typeAccess === 'user')
            history.push('/');
        else
            history.push('/dashboard');

    } catch (err) {
        errorHandler(err, REGISTER_FAIL, dispatch);
    }
}

// LOGIN USER 
export const login = (formData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/login', formData);
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        dispatch(loadUser());
        history.push('/');
    } catch (err) {
        errorHandler(err,LOGIN_FAIL,dispatch)
    }
}

//LOGOUT USER
export const logout = () => dispatch =>{
    dispatch({ type : LOGOUT });
    history.push('/');
}

//ERROR HANDLER
function errorHandler(err, type, dispatch) {
  const errors = err.response.data.errors;
  if (errors) {
    errors.forEach(error => {
      dispatch(setAlert(error.msg, 'danger'));
    });
    dispatch({ type });
  }
}
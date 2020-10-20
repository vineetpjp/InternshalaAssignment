import axios from 'axios';
import { setAlert } from "./alert";
import history from '../history';
import { ADD_TO_CART, DECREMENT_ITEM, GET_CART, INCREMENT_ITEM, PLACE_ORDER, REMOVE_FROM_CART } from './types';

// GET CART
export const getCart = () => async dispatch => {
    const response = await axios.get('/api/cart');
    console.log(response.data)
    dispatch({type: GET_CART,payload:response.data});
}

// ADD TO CART
export const addToCart = (item) => async (dispatch,getState) => {
    console.log(item,'action')
    dispatch({type:ADD_TO_CART, payload: item});
    const cart = getState().cart;
    await axios.put('/api/cart',cart);
}

//DECREMENT 
export const decrementItem = (id) => async (dispatch) => {
    dispatch({type:DECREMENT_ITEM, payload: id});
} 

export const removeItem = (id) => async (dispatch) => {
    dispatch({type:REMOVE_FROM_CART,payload:id});
}

//PLACE ORDER
export const placeOrder = () => async (dispatch,getState) =>{
    let cart = getState().cart;
    setAlert('Order Placed Successfully :)','success')
    try {
        await axios.post('/api/order',cart);
        await axios.put('/api/cart', { items: {}, totalItems:0, totalPrice:0, });
        dispatch({type:PLACE_ORDER});
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}

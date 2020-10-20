import { addToCart, removeFromCart,decrementFromCart } from "./helperFn";
import { ADD_TO_CART,DECREMENT_ITEM,GET_CART, INCREMENT_ITEM, PLACE_ORDER, REMOVE_FROM_CART } from "../actions/types";

const InitialState = {
    totalItems:0,
    totalPrice:0,
    items:{}
}

const cart = (state=InitialState,action) => {
    let { payload, type } = action;
    switch(type){
        case GET_CART:
            return payload;
        case ADD_TO_CART:
            state = addToCart(state,payload);
            return state;
        case DECREMENT_ITEM:
            return decrementFromCart(state,payload);
        case REMOVE_FROM_CART:
            return removeFromCart(state,payload);
        case PLACE_ORDER:
            return InitialState;
        default:
            return state;
    }
}

export default cart;
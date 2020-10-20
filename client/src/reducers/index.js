import { combineReducers } from 'redux';
import alerts from './alert'
import auth from './auth'
import cart from './cart'

export default combineReducers({
    alerts,
    auth,
    cart
})
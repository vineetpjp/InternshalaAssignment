import { SET_ALERT,REMOVE_ALERT } from './types'
import uuid from 'uuid';

export const setAlert = (msg,alertType,time = 3000) => (dispatch) => {
    const Id = uuid.v4();
    dispatch({type:SET_ALERT,payload:{msg,alertType,Id}});
    setTimeout(() => {
        dispatch({type:REMOVE_ALERT,payload:{Id}})
    }, time);
}
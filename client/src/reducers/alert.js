import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const alerts=  (state = [], action) => {
    const {type,payload} = action;
    switch(type){
        case SET_ALERT: 
            return [payload,...state ];
        case REMOVE_ALERT:
            return state.filter((alert)=> payload.Id != alert.Id );
        default:
            return state;
    }
}

export default alerts
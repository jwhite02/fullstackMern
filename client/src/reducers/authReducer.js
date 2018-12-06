import {FETCH_USER} from '../actions/types';

// const auth = {
//     cheeseUrl: [],
//     credits: 0,
//     googleId: ""
// };

export default function authReducer(state = null, action) {
    console.log(action);
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;    
    }
}
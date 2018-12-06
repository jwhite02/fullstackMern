import { FETCH_USER, CHOOSE_CATEGORY } from '../actions';

initialUs = {};

export default function (state = initialUs, action) {

    switch (action.type) {
        case FETCH_USER:
            return {}
        default: 
            return state;
    }
}

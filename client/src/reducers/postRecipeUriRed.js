// postRecipeUriReduer.js
import { FETCH_RECIPES_URIS } from '../actions/types';

export const postRecipeUriRed = (state = {}, action) => {
    switch (action.TYPE) {
        case FETCH_RECIPES_URIS:
            return {auth: action.payload};
            break;

        default:
            return state;
            break;
    }
}
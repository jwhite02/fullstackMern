// fetchRecipeUrisReducer.js
import { FETCH_RECIPES_URIS } from '../actions/types';

export const fetchRecipeUrisRed = (state = {}, action) => {
    switch (action.TYPE) {
        case FETCH_RECIPES_URIS:
            return {
                recipesUris: action.payload
            };
            break;
    
        default:
            return state;
            break;
    }
}
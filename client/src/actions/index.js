import axios from 'axios';
import { FETCH_USER, CHOOSE_CATEGORY, FETCH_RECIPES_URIS, POST_RECIPE_URI} from './types';

export function chooseCat (cat) {
    const action = {
        type: CHOOSE_CATEGORY,
        cat
    }
    return action;
}

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    //console.log(res.data);
    dispatch({type: FETCH_USER, payload: res.data});
}

export const fetchRecipeUris = () => async (dispatch) => {
    const res = await axios.get("/api/recipes");

    dispatch({type: FETCH_RECIPES_URIS, payload: res.data});
}

export const postRecipeUri = (values) => async dispatch => {
    console.log("I am in the postRecipUri action creator.");
    let res;
    try {
        res = await axios.post("/api/recipes", values);
    } catch (err) { console.log("An error occurred trying to Post")}

    try { dispatch({ type: POST_RECIPE_URI, payload: res.data }); 
    } catch (err) { console.log("An Error occurred while trying to dispatch POST_RECIPE_URI")}
}

// console.log("This is for the postRecipeUri submit cheeseUrl: " + values.cheeseUrl);
// let myvalues = JSON.stringify(values);
// console.log("This is cheeseUrl: " + myvalues);
// console.log("This is cheeseUrl: " + values);
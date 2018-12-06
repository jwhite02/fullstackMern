// recipeuriReducer.js // for reduxForm
const LOAD = '../actions/types.js';

const recipeuri = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            return {
                data: action.data,
            };
        default:
            return state;
    }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data });

export default recipeuri;
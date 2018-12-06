import { combineReducers } from 'redux';
import { cheesecake } from './data_reducer';
import authReducer from './authReducer';
import {reducer as reduxFormReducer} from 'redux-form';
import { connectRouter } from 'connected-react-router';
import  recipeuri  from './recipeuriReducer';

// removed 'history' parameter from the argument
const rootReducer = (history) => combineReducers({
    cheesecake,
    auth: authReducer,
    recipeuri,
    form: reduxFormReducer,
    router: connectRouter(history)
});

export default rootReducer;

import {FETCH_USER} from '../actions/types';

const auth = {
    cheeseUrl: [],
    credits: 0,
    googleId: ""
};

export default function authReducer(state = {}, action) {
    console.log(action.payload);
    let theObj = {...action.payload};
    console.log(theObj.cheeseUrl);
    switch(action.type) {
        case FETCH_USER:{
            console.log("I am in FETCH_USER");
            return {...state, cheeseUrl:theObj.cheeseUrl, googleId:theObj.googleId};
        }     //action.payload || false; // use Object.assign or {...state, action.payload}
        default:
            return { ...state, cheeseUrl: theObj.cheeseUrl, googleId: theObj.googleId };    
    }
}
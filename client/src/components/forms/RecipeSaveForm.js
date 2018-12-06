import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { push } from 'connected-react-router';
//import uriSubmit from './formHandlers/uriSubmit';
import { postRecipeUri } from '../../actions';  // postRecipeUri
import { load as loadRecipe } from '../../reducers/recipeuriReducer'; // use to help populate Form before submission

class RecipeSaveForm extends Component {
    
    render() {
        //const mycheesecake = this.props.cheesecake;  /* data will come from parent */
        const { handleSubmit, submitting, load, data, postRecipeUri } = this.props;
        return (
        <form onSubmit={handleSubmit(postRecipeUri)} >
            <label classsName="pl-5" htmlFor="checkRecipe">Check to save to your Recipe Box</label>
            <Field name="checkRecipe" id="checkRecipe" type="checkbox" component="input" onFocus={() => load(data)} />
            <div><Field name="cheeseUrl" type="hidden" component="input" /></div>
            <div>
                <button type="submit" disabled={submitting}>Save</button>
                {/* <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button> */}
            </div>
        </form>
        );
    } 
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.recipeuri.data
    }
}
     /*   postRecipeUri */
const myReduxForm  = reduxForm({
    form: "testForm",
    onSubmit: postRecipeUri,
    onSubmitSuccess: (result, dispatch) => {
        console.log("I am in the onSubmitSuccess func");
        console.log("I want to see results: " + result);
        console.log('i am after dispatch');
        // debugger;
        return dispatch(push("/"));
        //return <Redirect to="/" />;  http://localhost:3000/recipe/blackberry-cheesecake-recipe
        //return this.props.history.push;
    }
});

export default compose(
  connect(mapStateToProps, { load: loadRecipe, postRecipeUri  }),
  myReduxForm
)(RecipeSaveForm);

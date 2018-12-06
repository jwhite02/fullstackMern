import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form';
import { push } from 'connected-react-router';
//import {withRouter} from 'react-router';
//import { Redirect } from 'react-router-dom';
import submit from '../forms/formHandlers/submit';

class TestForm extends Component {



    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
    //const myname = "The z Hidden"
        return (
            <form onSubmit={handleSubmit(submit)}>
            <Field name="fName" type="text" component="input" />
            <Field name="lName" type="text" component="input" />
            <Field name="dName" type="text" values="this is it" component="input" hidden />
            <div>
                <button type="submit" disabled={submitting}> Submit Me</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
            </div>
        </form>
        );
    }
    
}


export default reduxForm({
    form: "testForm",
    onSubmit: submit,
    onSubmitSuccess: (result, dispatch) => {
        console.log("I am in the onSubmitSuccess func");
        console.log("I want to see results: " + result);
        console.log('i am after dispatch');
       // debugger;
        return dispatch(push("/"));
        //return <Redirect to="/" />;  http://localhost:3000/recipe/blackberry-cheesecake-recipe
        //return this.props.history.push;
        }
})(TestForm)


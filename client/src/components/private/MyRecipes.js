import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class MyRecipes extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cheesecake: state.cheesecake,
        auth: state.auth,
        recipeuri: state.recipeuri
    }
}

export default connect(mapStateToProps,null)(MyRecipes);
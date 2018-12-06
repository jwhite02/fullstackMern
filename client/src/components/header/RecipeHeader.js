import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from "./Login";

class RecipeHeader extends Component {

   
    render() {
        //console.log(this.props);
        if (this.props.isRcHeader === true) {
            return (
                <div className="parallax-recipeHeader parallax2">
                    <div className="pt-5" >
                        {/* <h1 className="text-center" >Recipe Header</h1> */}
                        <Login />
                    </div>
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(RecipeHeader);
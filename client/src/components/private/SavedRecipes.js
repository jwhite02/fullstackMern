import React, { Component } from 'react';
import { connect } from 'react-redux';

class SavedRecipes extends Component {

    renderContent() {

        let content = this.props.auth.cheeseUrl.map((elem) => {
          return  "<li> elem </li>"
        })

        return content;
    }

    render() {
        console.log(this.props.auth);
        return (
            <div>
                <ul>
                    {this.renderContent}
                </ul>   
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(SavedRecipes);
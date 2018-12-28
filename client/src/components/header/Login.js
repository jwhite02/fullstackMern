import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {


    renderContent = () => {
        console.log(this.props.authReducer.googleId);
        switch (this.props.authReducer) {
            case null:
                return("Still Deciding")
            case false:
                return( 
                    <div className="login">
                        <a href="http://localhost:5000/auth/google">Login</a>
                    </div> 
                )
            default:
                return(
                    <div className="login">
                        <a href="/api/logout">Logout</a>
                    </div>
                )  
        }
    }
    
    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )        
    }
}    

const mapStateToProps = (state, ownProps) => {
    return {
        authReducer: state.authReducer
    }
}

export default connect(mapStateToProps, null)(Login);
import React, { Component } from 'react';
import TestForm from '../forms/TestForm';
import showResults from '../forms/formHandlers/showResults';
//import { withRouter } from 'react-router';

class UserInfo extends Component {
    render() {
        return (
            <div>
                <div style={{ marginLeft:400, marginTop:100 }}  >
                    <h2>The User Name</h2>
                    <TestForm onSubmit={showResults} />
                </div>
            </div>
        );
    }
}

export default UserInfo;
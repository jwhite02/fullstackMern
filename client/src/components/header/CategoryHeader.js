import React, { Component } from 'react';
import Login from './Login';

class CategoryHeader extends Component {
    render() {
        return (
            <div className="parallax-categoryHeader parallax2">
                <div className="pt-5" >
                    {/* <h1 className="text-center">Category Header</h1> */}
                    <Login />
                </div>
            </div>
        );
    }
}

export default CategoryHeader;
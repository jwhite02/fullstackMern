import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseCat } from '../../actions';
import { withRouter } from 'react-router';
import {Route, Link} from 'react-router-dom';
import HtmlToReactParser from 'html-to-react/lib/parser';

import  * as theCats from '../../data/cheesecategories';  

import ArticleContainer from './ArticleContainer';
class ArticleList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    }
    
    render() { 
        const cheesecake = this.props.cheesecake;

        const htmlToReactParser = new HtmlToReactParser();
        const theArticleContent = cheesecake.filter((item) => {
            if (item.URITag === 'autum-cheesecake'){
                const directions = htmlToReactParser.parse(item.directions);
                return <React.Fragment>
                    <div>{item.Title}</div>
                    <div>{directions}</div>
                </React.Fragment> 
                
            }
        });
       
        return (
            <div className="bg-success">
                <h1 className="text-center"> Juan's Article List </h1>
                <span className="text-center d-inline-block"><Link to="/category/recipe/AppleCheesecakeRecipes/autumn-cheesecake"> Autumn Cheesecake </Link></span>
                <Route path="/category/:category/:aCat/:uritag" render={(...props) => { return <ArticleContainer isHeader={false}  />}} />
            </div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        cheesecake: state.cheesecake
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({chooseCat}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleList));
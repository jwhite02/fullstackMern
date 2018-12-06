import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';  // bubble, stack, or slide
import { connect } from 'react-redux';
//import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

import  * as theCats from '../../data/cheesecategories';

import CardSection from './CardSection';
import HeaderSection from '../header/HeaderSection';
import FooterSection from '../footer/FooterSection';
//import ArticleList from './ArticleList';
import CategoryRoute from './CategoryRoute';
import ArticleContainer from './ArticleContainer';
import UserInfo from './UserInfo';
import * as actions from '../../actions';

const routes =[
    {
        path: '/',
        exact: true,
        sidebar: () =>  (<div><HeaderSection bigHeader={true} /> <CardSection /> <FooterSection /></div>),
        main: () => <HeaderSection />
    },
   {
        path: '/article',
        exact: true,
        sidebar : () => {
        return (
                <div className="parallax parallax-header2">
                    <h1 className="text-center">SideBar</h1>
                    <br/>
                    <NavLink to="/">
                        <h3 className="text-center">Home</h3>
                    </NavLink>
                </div>
             )
            },
        main: () => <h2>Home</h2>
   } 
];


class SiteHolder extends Component {

    componentDidMount() {
       // this.props.fetchUser();
    }
    
    render() {
       // console.log(theCats.cheeseCats);
        const newLinks = theCats.cheeseCats.map((item) => {
            let str = item.slice(-7);  // returns 'Recipes'
            let str2 = item.slice(-17, -7);  // returns 'Cheesecake'
            let str3 = item.slice(0, -17);  // returns 'XXXXXXXXX'
            let strSpace = "  ";
            let str4 = str3.concat(strSpace, str2, strSpace, str);
            return <li key={str3}><Link to={`/category/${item}`}>{str4}</Link></li>
            //Route is placed in the return function
        }
        );

       // console.log(newLinks);

        return (
                <div>
                    <div id="outer-container">
                        <Menu isOpen={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
                                    <ul className="list-unstyled menuList" >
                                        <li><Link to='/'>Home</Link></li>
                                        {newLinks}
                                    </ul>
                        </Menu> 
                        <div id="page-wrap">
                            {routes.map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        exact={route.exact}
                                        render={route.sidebar}
                                    />
                                ))}
                            <Route  path="/category/:category" render={(...props) => {return <CategoryRoute />}}/>
                            <Route path="/recipe/:uritag" render={(props) => (<div>  <ArticleContainer isHeader={true} location={this.props.location} /> <FooterSection /> </div>)} />
                            <Route path="/usersinfo" component={UserInfo} />
                        </div>                             
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
  return ({
    cheesecake: state.cheesecake
  });
};

export default withRouter(connect(mapStateToProps, actions)(SiteHolder));
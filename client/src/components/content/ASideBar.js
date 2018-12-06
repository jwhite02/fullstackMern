import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HeaderSection from '../header/HeaderSection';
import CardSection from './CardSection';
import FooterSection from '../footer/FooterSection';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => { return (<div><HeaderSection /> <CardSection /> <FooterSection /></div>) },
        main: () => <HeaderSection />
    },
    {
        path: '/article',
        exact: true,
        sidebar: () => <h1>SideBar</h1>,
        main: () => <h2>Home</h2>
    }
];

const ASideBar = () => {
    return (
        <div>
            <div>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </div>
    );
};

export default ASideBar;
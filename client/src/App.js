import React, { Component } from 'react';
import Protypes from 'prop-types';
import '../src/styles/css/App.css';
import { Router } from 'react-router-dom';
import SiteBugerMenu from './components/SiteBugerMenu';
//import ASideBar from './components/content/ASideBar';
import ScrollToTop from './components/ScrollToTop';

import { connect } from 'react-redux';
import { fetchUser } from './actions';


class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return <div>
          <Router history={this.props.history}>
            <ScrollToTop>
              <SiteBugerMenu />
            </ScrollToTop>
          </Router>
      </div>;
      /* <div>  <HeaderSection /> <CardSection /> <FooterSection />
        <HeaderSection />
        <CardSection />
        <FooterSection />
      </div> */
  }
}

App.proTypes = {
  history: Protypes.object
}

export default connect(null, {fetchUser})(App);

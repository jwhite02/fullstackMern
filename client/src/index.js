import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/css/index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from "connected-react-router";

import rootReducer from '../src/reducers';

const history = createBrowserHistory();
console.log(history);

const store = createStore(
  rootReducer(history),
  {},
  compose(applyMiddleware(routerMiddleware(history), reduxThunk))
);
//console.log('store.getState()', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

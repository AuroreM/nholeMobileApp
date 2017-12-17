// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './modules/reducers';
import RootNavigator from './RootNavigation';
import AuthenticationTokenManager from './utils/authenticationManager';
import { navigateTo } from './modules/Navigation';
import { setToken } from './modules/User';
import rootSaga from './modules/sagas';

const sagaMiddleWare = createSagaMiddleware();
const enhancers = [];
let composeEnhancers = compose;
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension;
}
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(sagaMiddleWare), ...enhancers));
sagaMiddleWare.run(rootSaga);

export default class App extends Component<void, void> {
  redirectToMessageIfConnected = () =>
    AuthenticationTokenManager.get('jwtToken').then(token => {
      if (token) {
        store.dispatch(setToken(JSON.parse(token).id));
        store.dispatch(navigateTo('message'));
      }
    });
  componentDidMount() {
    this.redirectToMessageIfConnected();
  }
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

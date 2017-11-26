// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './modules/reducers';
import RootNavigation from './RootNavigation';
import UserSaga from './modules/User';

const sagaMiddleWare = createSagaMiddleware();
const enhancers = [];
let composeEnhancers = compose;
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension;
}
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(sagaMiddleWare), ...enhancers));
sagaMiddleWare.run(UserSaga);

export default class App extends Component<void, void> {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}

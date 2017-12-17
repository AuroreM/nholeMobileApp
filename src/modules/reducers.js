// @flow

import { reducer as reducerForm } from 'redux-form';
import { combineReducers } from 'redux';

import clientsReducer from './Clients';
import userReducer from './User';
import { Stack } from '../RootNavigation';

const stackReducer = (state, action) => Stack.router.getStateForAction(action, state);
const rootReducer = combineReducers({
  form: reducerForm,
  stack: stackReducer,
  clients: clientsReducer,
  user: userReducer,
});

export default rootReducer;

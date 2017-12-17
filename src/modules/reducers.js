// @flow

import { reducer as reducerForm } from 'redux-form';
import { combineReducers } from 'redux';

import clientsReducer from './Clients';
import userReducer from './User';
import { Stack } from '../RootNavigation';
import type { ClientsStateType } from './Clients';
import type { UserStateType } from './User';

const stackReducer = (state, action) => Stack.router.getStateForAction(action, state);
const rootReducer = combineReducers({
  form: reducerForm,
  stack: stackReducer,
  clients: clientsReducer,
  user: userReducer,
});

export default rootReducer;

export type StateType = {
  form: any,
  stack: any,
  clients: ClientsStateType,
  user: UserStateType,
};

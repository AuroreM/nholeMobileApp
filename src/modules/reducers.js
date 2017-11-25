import { reducer as reducerForm } from 'redux-form';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  form: reducerForm,
});

export default rootReducer;

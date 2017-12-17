// @flow
// TODO : Remove lodash
import _ from 'lodash';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    default:
      break;
    case 'GET_CLIENTS_SUCCESS':
      return {
        ...state,
        list: action.clients,
      };
    case 'UPDATE_CLIENTS_LIST_AFTER_ONE_DELETED':
      return {
        ...state,
        list: _.remove(state.list, client => action.clientId !== client.id),
      };
  }
  return state;
}

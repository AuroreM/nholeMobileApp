// @flow
import type { ActionType } from './actions';

type ClientsType = {|
  firstname: string,
  lastname: string,
  number: string,
  morning: boolean,
  lunch: boolean,
  afternoon: boolean,
  evening: boolean,
  id: number,
  userId: number,
|};

export type ClientsStateType = {
  list: ClientsType[],
};

const ClientsReducer = (state: ClientsStateType = { list: [] }, action: ActionType): ClientsStateType => {
  switch (action.type) {
    default:
      break;
    case 'GET_CLIENTS_SUCCESS':
      return {
        ...state,
        list: action.payload.clients,
      };
    case 'UPDATE_CLIENTS_LIST_AFTER_ONE_DELETED':
      const { clientId } = action.payload;
      return {
        ...state,
        list: removeClientById(state.list, clientId),
      };
  }
  return state;
};

export const removeClientById = (clients: ClientsType[], id: string) => {
  return clients.reduce((newClients, client) => {
    if (client.id !== id) {
      newClients.push(client);
    }
    return newClients;
  }, []);
};

export default ClientsReducer;

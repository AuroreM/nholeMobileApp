// @flow
import type { ActionType } from './actions';

export type ClientType = {|
  firstname: string,
  lastname: string,
  number: string,
  morning: boolean,
  lunch: boolean,
  afternoon: boolean,
  evening: boolean,
  id: number,
  isClientEditionModalVisible: ?boolean,
|};

export type ExistingClientType = {|
  firstname: string,
  lastname: string,
  number: string,
  morning: boolean,
  lunch: boolean,
  afternoon: boolean,
  evening: boolean,
  id: number,
  userId: number,
  isClientEditionModalVisible: ?boolean,
|};

export type NewClientType = ClientType;

export type ClientsStateType = { list: ExistingClientType[] };

const ClientsReducer = (state: ClientsStateType = { list: [] }, action: ActionType): ClientsStateType => {
  switch (action.type) {
    default:
      break;
    case 'OPEN_CLIENT_EDITION_MODAL': {
      return {
        ...state,
        list: triggerClientEditionModalByClient(state.list, action.payload.clientId, true),
      };
    }
    case 'CLOSE_CLIENT_EDITION_MODAL': {
      return {
        ...state,
        list: triggerClientEditionModalByClient(state.list, action.payload.clientId, false),
      };
    }
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

export const removeClientById = (clients: ExistingClientType[], id: string) => {
  return clients.reduce((newClients, client) => {
    if (client.id !== id) {
      newClients.push(client);
    }
    return newClients;
  }, []);
};

const triggerClientEditionModalByClient = (clients: ExistingClientType[], id: string, state) =>
  clients.map(client => {
    if (client.id === id) {
      client.isClientEditionModalVisible = state;
    }
    return client;
  });

export default ClientsReducer;

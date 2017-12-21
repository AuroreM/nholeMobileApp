// @flow
import type { NewClientType } from './reducer';

export const getClients = (): ActionType => {
  return {
    type: 'GET_CLIENTS',
  };
};

export const getClientsSuccess = (clients: any): ActionType => {
  return {
    type: 'GET_CLIENTS_SUCCESS',
    payload: { clients },
  };
};

export const deleteClient = (clientId: string): ActionType => {
  return {
    type: 'DELETE_CLIENT',
    payload: { clientId },
  };
};

export const updateClientsListAfterOneDeleted = (clientId: string): ActionType => {
  return {
    type: 'UPDATE_CLIENTS_LIST_AFTER_ONE_DELETED',
    payload: { clientId },
  };
};

export const addClient = (client: NewClientType): ActionType => ({
  type: 'ADD_CLIENT',
  payload: {
    client,
  },
});

export type ActionType =
  | {|
      type: 'GET_CLIENTS',
    |}
  | {|
      type: 'DELETE_CLIENT',
      payload: { clientId: string },
    |}
  | {|
      type: 'UPDATE_CLIENTS_LIST_AFTER_ONE_DELETED',
      payload: { clientId: string },
    |}
  | {|
      type: 'ADD_CLIENT',
      payload: { client: NewClientType },
    |}
  | {|
      type: 'GET_CLIENTS_SUCCESS',
      payload: { clients: any },
    |};

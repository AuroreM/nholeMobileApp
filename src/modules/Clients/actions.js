// @flow
import type { NewClientType, ClientType } from './reducer';

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

export const editClient = (client: ClientType): ActionType => ({
  type: 'EDIT_CLIENT',
  payload: {
    client,
  },
});

export const closeClientEditionModal = (clientId: string): ActionType => ({
  type: 'CLOSE_CLIENT_EDITION_MODAL',
  payload: { clientId },
});

export const openClientEditionModal = (clientId: string): ActionType => ({
  type: 'OPEN_CLIENT_EDITION_MODAL',
  payload: { clientId },
});

export type ActionType =
  | {|
      type: 'GET_CLIENTS',
    |}
  | {|
      type: 'OPEN_CLIENT_EDITION_MODAL',
      payload: { clientId: string },
    |}
  | {|
      type: 'CLOSE_CLIENT_EDITION_MODAL',
      payload: { clientId: string },
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
      type: 'EDIT_CLIENT',
      payload: { client: ClientType },
    |}
  | {|
      type: 'GET_CLIENTS_SUCCESS',
      payload: { clients: any },
    |};

// @flow

export const getClients = (): ActionType => {
  return {
    type: 'GET_CLIENTS',
  };
};

export const getClientsSuccess = (clients): ActionType => {
  return {
    type: 'GET_CLIENTS_SUCCESS',
    clients,
  };
};

export const deleteClient = (clientId): ActionType => {
  return {
    type: 'DELETE_CLIENT',
    clientId,
  };
};

export const updateClientsListAfterOneDeleted = (clientId): ActionType => {
  return {
    type: 'UPDATE_CLIENTS_LIST_AFTER_ONE_DELETED',
    clientId,
  };
};

type ActionType =
  | {|
      type: 'GET_CLIENTS',
    |}
  | {|
      type: 'DELETE_CLIENT',
      payload: { clientId: any },
    |}
  | {|
      type: 'UPDATE_CLIENTS_LIST_AFTER_ONE_DELETED',
      payload: { clientId: any },
    |}
  | {|
      type: 'GET_CLIENTS_SUCCESS',
      payload: { clients: any },
    |};

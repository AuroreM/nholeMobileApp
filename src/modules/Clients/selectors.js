// @flow
import type { NewClientType, ExistingClientType } from './reducer';
import type { StateType } from '../reducers';

export const clientsSelector = (state: StateType): ExistingClientType | NewClientType => state.clients.list;

export const isClientEditionModalVisibleSelector = (state: StateType, clientId: string) => {
  const clients = state.clients.list;
  const client = clients.filter(client => client.id === clientId);
  return client[0].isClientEditionModalVisible;
};

// @flow
import type { StateType } from '../reducers';
export const isClientEditionModalVisibleSelector = (state: StateType, clientId: string) => {
  const clients = state.clients.list;
  const client = clients.filter(client => client.id === clientId);
  return client[0].isClientEditionModalVisible;
};

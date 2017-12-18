import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { select } from 'redux-saga/effects';
import * as matchers from 'redux-saga-test-plan/matchers';

import { getClientsListSaga, getClientsListCall, deleteClientSaga } from './sagas';
import { tokenSelector } from '../User';
import { getClientsSuccess } from './actions';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import reducers from '../reducers';

describe('getClientsListCall', () => {
  it('should handle getClientsListCall correctly', () => {
    const requestURL = `${baseUrl()}/api/Clients/byAuth`;
    testSaga(getClientsListCall, 1234)
      .next()
      .call(request, `${requestURL}?access_token=1234`, { method: 'GET' })
      .next([])
      .isDone();
  });
});

describe('getClientsListSaga', () => {
  it('should handle getClientsListSaga correctly', () => {
    testSaga(getClientsListSaga, { type: 'GET_CLIENTS' })
      .next()
      .select(tokenSelector)
      .next('1234')
      .call(getClientsListCall, '1234')
      .next([])
      .put(getClientsSuccess([]))
      .next()
      .isDone();
  });

  it('should put the clients in the store', () => {
    const clients = [
      {
        firstname: 'Aurore',
        lastname: 'Ma',
        number: '0707070707',
        morning: true,
        afternoon: true,
        lunch: false,
        evening: false,
        id: 1,
        userId: 1,
      },
      {
        firstname: 'Christine',
        lastname: 'Ma',
        number: '0606060606',
        morning: false,
        afternoon: false,
        lunch: false,
        evening: true,
        id: 2,
        userId: 1,
      },
    ];
    return expectSaga(getClientsListSaga, { type: 'GET_CLIENTS' })
      .withReducer(reducers, { clients: { list: [] } })
      .provide([[select(tokenSelector), 1], [matchers.call.fn(getClientsListCall, '1234'), clients]])
      .run()
      .then(result => expect(result.storeState.clients.list).toEqual(clients));
  });
});

describe('deleteClientSaga', () => {
  it('should handle deleteClientSaga correctly', () => {
    const requestBaseUrl = `${baseUrl()}/api/Clients`;
    testSaga(deleteClientSaga, { type: 'DELETE_CLIENT', payload: { clientId: 1 } })
      .next()
      .select(tokenSelector)
      .next('1234')
      .call(request, `${requestBaseUrl}/1?access_token=1234`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .next()
      .isDone();
  });
});

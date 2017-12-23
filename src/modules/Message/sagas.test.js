import { sendMessageSaga } from './sagas';
import { testSaga } from 'redux-saga-test-plan';

import { tokenSelector } from '../User';
import request from '../../utils/request';
import { baseUrl } from '../../config';

describe('sendMessageSaga', () => {
  // Pb de ce test: ne teste pas l'appel à SendSMS
  it('should handle saga correctly', () => {
    const requestURL = `${baseUrl()}/api/Clients/byAuth/slot`;
    testSaga(sendMessageSaga, { type: 'SEND_MESSAGE', payload: { slot: 'morning', message: 'toto' } })
      .next()
      .select(tokenSelector)
      .next('1234')
      .call(request, `${requestURL}?slot=morning&access_token=1234`, {
        method: 'GET',
      })
      .next([{ id: 1, firstname: 'toto', lastname: 'titi', number: '0606060606' }])
      .isDone();
  });
});

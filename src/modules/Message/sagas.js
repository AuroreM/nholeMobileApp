import { takeLatest, select, call } from 'redux-saga/effects';
import SendSMS from 'react-native-sms';

import request from '../../utils/request';
import { baseUrl } from '../../config';
import { tokenSelector } from '../User';

export function* sendMessageSaga(action) {
  const requestURL = `${baseUrl()}/api/Clients/byAuth/slot`;
  const token = yield select(tokenSelector);
  try {
    const clients = yield call(request, `${requestURL}?slot=${action.payload.slot}&access_token=${token}`, {
      method: 'GET',
    });
    const clientsNumbers = clients.map(client => client.number);
    SendSMS.send(
      {
        body: action.payload.message,
        recipients: clientsNumbers,
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
      }
    );
  } catch (e) {
    console.warn('Failure in sendMessageSaga', e);
  }
}

export function* MessageSaga() {
  yield takeLatest('SEND_MESSAGE', sendMessageSaga);
}

export default [MessageSaga];

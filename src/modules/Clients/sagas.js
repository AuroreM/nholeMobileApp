import { takeLatest, call, put, select } from 'redux-saga/effects';

import request from '../../utils/request';
import { getClientsSuccess } from './actions';
import { baseUrl } from '../../config';
import { tokenSelector } from '../User';

export function* getClientsListSaga() {
  const requestURL = `${baseUrl()}/api/Clients/byAuth`;
  // yield put(clientsListLoading());
  try {
    const token = yield select(tokenSelector);
    const clients = yield call(request, `${requestURL}?access_token=${token}`, {
      method: 'GET',
    });
    yield put(getClientsSuccess(clients));
  } catch (err) {
    console.warn('Failure in getClientsListSaga');
  }
}

export function* deleteClientSaga(action) {
  const requestBaseUrl = `${baseUrl()}/api/Clients`;
  const token = yield select(tokenSelector);
  const requestURL = `${requestBaseUrl}/${action.clientId}?access_token=${token}`;
  yield call(request, requestURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export function* ClientsSaga() {
  yield takeLatest('DELETE_CLIENT', deleteClientSaga);
  yield takeLatest('GET_CLIENTS', getClientsListSaga);
}

export default [ClientsSaga];

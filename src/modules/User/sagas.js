import { takeLatest, put, call, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { FOREGROUND } from 'redux-enhancer-react-native-appstate';

import request from '../../utils/request';
import { setToken } from './actions';
import { baseUrl } from '../../config';
import { getClientsListCall } from '../Clients/sagas';
import AuthenticationManager from '../../utils/authenticationManager';
import { tokenSelector } from './selectors';
import showToast from '../../utils/toast';

export function* loginCall(params) {
  const requestURL = `${baseUrl()}/api/Users/login`;
  const response = yield call(request, requestURL, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  AuthenticationManager.set(JSON.stringify(response));
  yield put(setToken(response.id));
}

export function* loginSaga(action) {
  try {
    yield call(loginCall, {
      email: action.payload.email,
      password: action.payload.password,
    });
    yield put(NavigationActions.navigate({ routeName: 'message' }));
  } catch (e) {
    showToast("L'authentification a échoué, veuillez vérifier votre email et votre mot de passe");
    console.warn(`Login failure ${e}`);
  }
}

export function* signupSaga(action) {
  const requestURL = `${baseUrl()}/api/Users`;
  const body = JSON.stringify({
    email: action.payload.email,
    password: action.payload.password,
  });
  try {
    yield call(request, requestURL, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield call(loginCall, {
      email: action.payload.email,
      password: action.payload.password,
    });
    yield put(NavigationActions.navigate({ routeName: 'message' }));
  } catch (e) {
    showToast("L'enregistrement a échoué, réessayer plus tard");
    console.warn(`Signup failure ${e}`);
  }
}

export function* logoutSaga(): Generator<*, *, *> {
  AuthenticationManager.clear();
  yield put(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'login' })] }));
}

export function* appHasComeBackToForeground(): Generator<*, *, *> {
  try {
    const token = yield select(tokenSelector);
    yield call(getClientsListCall, token);
  } catch (e) {
    if (e.status === 401) {
      showToast('Votre session a expiré, veuillez vous authentifier à nouveau');
      yield call(logoutSaga);
    }
  }
}

export function* UserSaga() {
  yield takeLatest('LOGIN', loginSaga);
  yield takeLatest('LOGOUT', logoutSaga);
  yield takeLatest('SIGNUP', signupSaga);
  yield takeLatest(FOREGROUND, appHasComeBackToForeground);
}

export default UserSaga;

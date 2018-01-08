import { takeLatest, put, call, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { FOREGROUND } from 'redux-enhancer-react-native-appstate';

import request from '../../utils/request';
import { setToken } from './actions';
import { baseUrl } from '../../config';
import { getClientsListCall } from '../Clients/sagas';
import AuthenticationManager from '../../utils/authenticationManager';
import { tokenSelector } from './selectors';
// import { handleToastr } /from '../../modules/Toastr/actions';

export function* loginCall(params) {
  const requestURL = `${baseUrl()}/api/Users/login`;
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    AuthenticationManager.set(JSON.stringify(response));
    yield put(setToken(response.id));
    return true;
  } catch (e) {
    // yield put(handleToastr("L'authentification a échoué, veuillez vérifier votre email et votre mot de passe"));
    console.warn(`Login failure ${e}`);
    return false;
  }
}

export function* loginSaga(action) {
  const response = yield call(loginCall, {
    email: action.payload.email,
    password: action.payload.password,
  });
  if (response) {
    yield put(NavigationActions.navigate({ routeName: 'message' }));
  } else {
    // show toast message
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
    // yield put(handleToastr('Votre compte a bien été créé.'));
  } catch (e) {
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

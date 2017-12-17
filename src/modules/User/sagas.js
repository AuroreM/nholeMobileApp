import { takeLatest, put, call } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import request from '../../utils/request';
import { setToken } from './actions';
import { baseUrl } from '../../config';
import AuthenticationManager from '../../utils/authenticationManager';
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
  } catch (e) {
    // yield put(handleToastr("L'authentification a échoué, veuillez vérifier votre email et votre mot de passe"));
    console.warn(`Login failure ${e}`);
  }
}

export function* loginSaga(action) {
  yield call(loginCall, {
    email: action.payload.email,
    password: action.payload.password,
  });
  yield put(NavigationActions.navigate({ routeName: 'message' }));
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

export function* UserSaga() {
  yield takeLatest('LOGIN', loginSaga);
  yield takeLatest('SIGNUP', signupSaga);
}

export default UserSaga;

import { takeLatest, put, call } from 'redux-saga/effects';
import request from '../../utils/request';
import { loginSuccess } from './actions';
import { baseUrl } from '../../config';
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
    sessionStorage.setItem('jwtToken', JSON.stringify(response));
    yield put(loginSuccess());
  } catch (e) {
    // yield put(handleToastr("L'authentification a échoué, veuillez vérifier votre email et votre mot de passe"));
    console.warn(`Login failure ${e}`);
  }
}

export function* login(action) {
  yield call(loginCall, {
    email: action.payload.email,
    password: action.payload.password,
  });
}

export function* UserSaga() {
  yield takeLatest('LOGIN', login);
}

export default UserSaga;

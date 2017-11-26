import { testSaga } from 'redux-saga-test-plan';
import { put, call } from 'redux-saga/effects';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { loginSuccess } from './actions';
import { loginCall, login, signup } from './sagas';

const params = {
  email: 'aurore@a.com',
  password: 'toto',
};
describe('loginCall successfull', () => {
  const saga = loginCall(params);

  it('should call the API to authenticate  the user', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'aurore@a.com', password: 'toto' }),
      })
    );
  });

  it('should store the jwtToken in the sessionStorage and dispatch loginSuccess Action', () => {
    global.sessionStorage = jest.fn();
    let jwtToken = '';
    global.sessionStorage.setItem = jest.fn(() => (jwtToken = 'token'));
    expect(saga.next().value).toEqual(put(loginSuccess()));
    expect(jwtToken).toEqual('token');
  });
});

describe('login Saga successfull', () => {
  it('should call loginCall successfully', () => {
    testSaga(login, {
      type: 'LOGIN',
      payload: params,
    })
      .next()
      .call(loginCall, params)
      .next()
      .isDone();
  });
});

describe('signup Saga', () => {
  it('should signup successfully', () => {
    testSaga(signup, {
      type: 'SIGNUP',
      payload: params,
    })
      .next()
      .call(request, `${baseUrl()}/api/Users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
      .next()
      .call(loginCall, params)
      .next()
      .isDone();
  });
});

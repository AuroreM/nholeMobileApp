import { testSaga } from 'redux-saga-test-plan';
import { put, call } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { baseUrl } from '../../config';
import request from '../../utils/request';
import { loginCall, loginSaga, signupSaga } from './sagas';

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
});

describe('login Saga successfull', () => {
  it('should call loginCall successfully', () => {
    testSaga(loginSaga, {
      payload: params,
      type: 'LOGIN',
    })
      .next()
      .call(loginCall, params)
      .next()
      .put(NavigationActions.navigate({ routeName: 'message' }))
      .next()
      .isDone();
  });
});

describe('signup Saga', () => {
  it('should signup successfully', () => {
    testSaga(signupSaga, {
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
      .put(NavigationActions.navigate({ routeName: 'message' }))
      .next()
      .isDone();
  });
});

// @flow
export const login = (email: string, password: string): ActionType => ({
  type: 'LOGIN',
  payload: {
    email,
    password,
  },
});

export const loginSuccess = (): ActionType => ({ type: 'LOGIN_SUCCESS' });

export const signup = (email: string, password: string): ActionType => ({
  type: 'SIGNUP',
  payload: {
    email,
    password,
  },
});

type ActionType =
  | {|
      type: 'LOGIN',
      payload: { email: string, password: string },
    |}
  | {| type: 'LOGIN_SUCCESS' |}
  | {|
      type: 'SIGNUP',
      payload: { email: string, password: string },
    |};

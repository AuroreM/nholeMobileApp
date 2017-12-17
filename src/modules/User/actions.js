// @flow
export const login = (email: string, password: string): ActionType => ({
  type: 'LOGIN',
  payload: {
    email,
    password,
  },
});

export const signup = (email: string, password: string): ActionType => ({
  type: 'SIGNUP',
  payload: {
    email,
    password,
  },
});

export const setToken = (token: string): ActionType => ({
  type: 'SET_TOKEN',
  payload: {
    token,
  },
});

type ActionType =
  | {|
      type: 'LOGIN',
      payload: { email: string, password: string },
    |}
  | {|
      type: 'SET_TOKEN',
      payload: { token: string },
    |}
  | {|
      type: 'SIGNUP',
      payload: { email: string, password: string },
    |};

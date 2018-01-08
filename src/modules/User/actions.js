// @flow
export const login = (email: string, password: string): ActionType => ({
  type: 'LOGIN',
  payload: {
    email,
    password,
  },
});

export const logout = (): ActionType => ({ type: 'LOGOUT' });

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

export type ActionType =
  | {|
      type: 'LOGIN',
      payload: { email: string, password: string },
    |}
  | {|
      type: 'LOGOUT',
    |}
  | {|
      type: 'SET_TOKEN',
      payload: { token: string },
    |}
  | {|
      type: 'SIGNUP',
      payload: { email: string, password: string },
    |};

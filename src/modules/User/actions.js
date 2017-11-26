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

type ActionType =
  | {|
      type: 'LOGIN',
      payload: { email: string, password: string },
    |}
  | {|
      type: 'SIGNUP',
      payload: { email: string, password: string },
    |};

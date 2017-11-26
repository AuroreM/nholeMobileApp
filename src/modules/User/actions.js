// @flow
export const login = (email, password) => ({
  type: 'LOGIN',
  payload: {
    email,
    password,
  },
});

export const loginSuccess = () => ({ type: 'LOGIN_SUCCESS' });

export const signup = (email, password) => ({
  type: 'SIGNUP',
  payload: {
    email,
    password,
  },
});

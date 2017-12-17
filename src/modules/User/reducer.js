// @flow
import type { ActionType } from './actions';

export type UserStateType = {|
  token: string,
|};

const userReducer = (state: UserStateType = { token: '' }, action: ActionType): UserStateType => {
  switch (action.type) {
    default:
      break;
    case 'SET_TOKEN':
      return {
        token: action.payload.token,
      };
  }
  return state;
};

export default userReducer;

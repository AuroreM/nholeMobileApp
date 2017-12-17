// @flow
import type { StateType } from '../reducers';
export const tokenSelector = (state: StateType) => state.user.token;

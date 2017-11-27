// @flow

export type ActionType = {|
  type: 'NAVIGATE_TO',
  payload: {| routeName: routeName |},
|};

type routeName = 'login' | 'signup' | 'message';

export const navigateTo = (routeName: routeName): ActionType => ({ type: 'NAVIGATE_TO', payload: { routeName } });

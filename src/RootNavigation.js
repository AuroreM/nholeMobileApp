// @flow

import { StackNavigator } from 'react-navigation';

import * as Pages from 'nholeMobileApp/src/pages';

export default StackNavigator(
  {
    login: {
      screen: Pages.Login,
    },
  },
  {
    initialRouteName: 'login',
  }
);

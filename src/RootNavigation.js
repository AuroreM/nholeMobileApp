// @flow

import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import * as Pages from 'nholeMobileApp/src/pages';

export const Stack = StackNavigator(
  {
    login: {
      screen: Pages.Login,
    },
    signup: {
      screen: Pages.Signup,
    },
    message: {
      screen: Pages.Message,
    },
    clients: {
      screen: Pages.ClientsList,
    },
  },
  {
    initialRouteName: 'login',
  }
);

class StackNavigation extends Component<PropsType, void> {
  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  backAction = () => this.props.navigation.goBack();

  render() {
    const { dispatch, navigation } = this.props;

    return (
      <Stack
        navigation={addNavigationHelpers({
          dispatch,
          state: navigation,
        })}
      />
    );
  }
}

export default connect(state => ({ navigation: state.stack }))(StackNavigation);

type PropsType = {
  dispatch: Function,
  navigation: Function,
};

// @flow

import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
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
    clientAddition: {
      screen: Pages.ClientAddition,
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

  backAction = () => {
    const { navigation } = this.props;
    if (navigation.routes.length > 1) {
      const currentRoute = navigation.routes[navigation.index].routeName;
      if (currentRoute === 'message') {
        BackHandler.exitApp();
      } else {
        return this.props.dispatch(NavigationActions.back());
      }
      return true;
    }
  };

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

const mapStateToProps = state => ({ navigation: state.stack });

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigation);

type PropsType = {
  dispatch: Function,
  navigation: Function,
};

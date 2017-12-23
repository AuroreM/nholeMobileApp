// @flow

import React, { Component } from 'react';
import { Keyboard, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, TextField, FullButton } from 'nholeMobileApp/src/components';
import { login } from '../../modules/User';
import navigationHeader from '../../utils/navigationHeader';
import theme from 'nholeMobileApp/src/theme';

class Login extends Component<DispatchProps & NavigationScreenProp, void> {
  static navigationOptions = navigationHeader('Login');

  onPress = () => {
    this.props.navigation.navigate('signup');
  };

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <Field name="email" placeholder="Email" component={TextField} type="email" />
        <Field name="password" placeholder="Mot de passe" component={TextField} type="password" secureTextEntry />
        <View style={theme.buttonsContainer}>
          <FullButton title="Login" onPress={this.props.handleSubmit} />
          <FullButton title="Sign up" onPress={this.onPress} secondaryButton />
        </View>
      </Page>
    );
  }
}

type DispatchProps = {
  onSubmit: Function,
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  onSubmit: ({ email, password }) => {
    Keyboard.dismiss();
    dispatch(login(email, password));
  },
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'login' }));
export default enhance(Login);

// @flow

import React, { Component } from 'react';
import { Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, TextField } from 'nholeMobileApp/src/components';
import { login } from '../../modules/User';

class Login extends Component<Props, void> {
  static navigationOptions = {
    title: 'Login',
  };

  onPress = () => {
    this.props.navigation.navigate('signup');
  };

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <Field name="email" placeholder="Email" component={TextField} type="email" />
        <Field name="password" placeholder="Mot de passe" component={TextField} type="password" secureTextEntry />
        <Button title="Login" onPress={this.props.handleSubmit} />
        <Button title="Sign in" onPress={this.onPress} />
      </Page>
    );
  }
}

type Props = {
  handleSubmit: Function,
  navigation: NavigationScreenProp,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password }) => dispatch(login(email, password)),
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'login' }));
export default enhance(Login);

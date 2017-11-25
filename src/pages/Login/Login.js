// @flow

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Page, TextField } from 'nholeMobileApp/src/components';
import { login } from '../../modules/User';

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  props: PropsType;

  render() {
    return (
      <Page>
        <Field name="email" placeholder="Email" component={TextField} type="email" />
        <Field name="password" placeholder="Mot de passe" component={TextField} type="password" secureTextEntry />
        <Button title="Login" onPress={this.props.handleSubmit} />
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password }) => dispatch(login(email, password)),
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'login' }));
export default enhance(Login);

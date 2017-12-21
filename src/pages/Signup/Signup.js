// @flow
import React, { Component } from 'react';
import { Button, Keyboard } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect, DispatchProp } from 'react-redux';
import { compose } from 'recompose';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, TextField } from 'nholeMobileApp/src/components';
import { signup } from '../../modules/User/actions';

class Signup extends Component<DispatchProps & NavigationScreenProp, void> {
  static navigationOptions = {
    title: 'Signup',
  };

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <Field name="email" placeholder="Email" component={TextField} type="email" />
        <Field name="password" placeholder="Mot de passe" component={TextField} type="password" secureTextEntry />
        <Button title="Signup" onPress={this.props.handleSubmit} />
      </Page>
    );
  }
}

const mapDispatchToProps = (dispatch: Function): DispatchProp => ({
  onSubmit: ({ email, password }) => {
    Keyboard.dismiss();
    dispatch(signup(email, password));
  },
});

type DispatchProps = {
  onSubmit: Function,
};

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'signup' }));
export default enhance(Signup);

// @flow
import React, { Component } from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect, DispatchProp } from 'react-redux';
import { compose } from 'recompose';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, TextField, FullButton } from 'nholeMobileApp/src/components';
import { signup } from '../../modules/User/actions';
import navigationHeader from '../../utils/navigationHeader';

class Signup extends Component<DispatchProps & NavigationScreenProp, void> {
  static navigationOptions = navigationHeader('Signup');

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <Field name="email" placeholder="Email" component={TextField} type="email" />
        <Field name="password" placeholder="Mot de passe" component={TextField} type="password" secureTextEntry />
        <FullButton style={styles.button} title="Signup" onPress={this.props.handleSubmit} />
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

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

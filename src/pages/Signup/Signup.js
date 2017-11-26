import React, { Component } from 'react';
import { Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Page, TextField } from 'nholeMobileApp/src/components';
import { signup } from '../../modules/User/actions';

class Signup extends Component {
  static navigationOptions = {
    title: 'Signup',
  };
  props: PropsType;

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

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password }) => {
    dispatch(signup(email, password));
  },
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'signup' }));
export default enhance(Signup);

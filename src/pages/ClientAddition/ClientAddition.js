//@flow

import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { submit as submitForm } from 'redux-form';
import { connect } from 'react-redux';
import type { NavigationScreenProp } from 'react-navigation';

import { addClient } from '../../modules/Clients';
import { Page, FullButton, Checkbox } from 'nholeMobileApp/src/components';
import navigationHeader from '../../utils/navigationHeader';
import theme from 'nholeMobileApp/src/theme';
import ClientAdditionForm from './components/ClientAdditionForm';

class ClientAddition extends Component<DispatchProps & NavigationScreenProp, void> {
  static navigationOptions = navigationHeader('Nouveau Client', true);

  renderField = text => ({ input: { value, onChange } }) => (
    <Checkbox text={text} onPress={() => onChange(!value)} isChecked={value} />
  );

  register = () => {
    Keyboard.dismiss();
    this.props.submitForm('clientAddition');
  };
  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <ClientAdditionForm onSubmitForm={this.props.onSubmitForm} />
        <View style={theme.buttonContainer}>
          <FullButton onPress={this.register} title="Enregistrer" />
        </View>
      </Page>
    );
  }
}

type DispatchProps = {
  submitForm: Function,
};

const mapDispatchToProps: DispatchProps = {
  submitForm,
  onSubmitForm: addClient,
};

export default connect(null, mapDispatchToProps)(ClientAddition);

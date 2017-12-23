//@flow

import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, TextField, Checkbox, FullButton } from 'nholeMobileApp/src/components';
import { addClient } from '../../modules/Clients';
import navigationHeader from '../../utils/navigationHeader';

class ClientAddition extends Component<DispatchProps & NavigationScreenProp, void> {
  static navigationOptions = navigationHeader('Nouveau Client', true);

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <Text>Renseignez ses informations</Text>
        <Field name="firstname" placeholder="Prénom" component={TextField} type="string" />
        <Field name="lastname" placeholder="Nom" component={TextField} type="string" />
        <Field name="number" placeholder="Numéro de téléphone" component={TextField} type="string" />
        <Text>Choisissez ses créneaux</Text>
        <Field
          name="morning"
          component={({ input: { value, onChange } }) => (
            <Checkbox text={'Cours du matin'} onPress={() => onChange(!value)} isChecked={value} />
          )}
        />
        <Field
          name="lunch"
          component={({ input: { value, onChange } }) => (
            <Checkbox text={'Cours du midi'} onPress={() => onChange(!value)} isChecked={value} />
          )}
        />
        <Field
          name="afternoon"
          component={({ input: { value, onChange } }) => (
            <Checkbox text={"Cours de l'après midi"} onPress={() => onChange(!value)} isChecked={value} />
          )}
        />
        <Field
          name="evening"
          component={({ input: { value, onChange } }) => (
            <Checkbox text={'Cours du soir'} onPress={() => onChange(!value)} isChecked={value} />
          )}
        />

        <FullButton onPress={this.props.handleSubmit} title="Enregistrer" />
      </Page>
    );
  }
}

type DispatchProps = {
  onSubmit: Function,
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  onSubmit: values => {
    Keyboard.dismiss();
    dispatch(addClient(values));
  },
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'clientAddition' }));
export default enhance(ClientAddition);

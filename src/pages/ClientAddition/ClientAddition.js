//@flow

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, TextField, Checkbox } from 'nholeMobileApp/src/components';

class ClientAddition extends Component<DispatchProps & NavigationScreenProp, void> {
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

        <Button onPress={this.props.handleSubmit} title="Enregistrer" />
      </Page>
    );
  }
}

type DispatchProps = {
  onSubmit: Function,
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  onSubmit: values => console.log(values),
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'clientAddition' }));
export default enhance(ClientAddition);

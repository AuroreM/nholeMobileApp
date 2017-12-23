//@flow

import React, { Component } from 'react';
import { View, Text, Keyboard, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, TextField, Checkbox, FullButton } from 'nholeMobileApp/src/components';
import { addClient } from '../../modules/Clients';
import navigationHeader from '../../utils/navigationHeader';
import theme from 'nholeMobileApp/src/theme';

class ClientAddition extends Component<DispatchProps & NavigationScreenProp, void> {
  static navigationOptions = navigationHeader('Nouveau Client', true);

  renderField = text => ({ input: { value, onChange } }) => (
    <Checkbox text={text} onPress={() => onChange(!value)} isChecked={value} />
  );

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <View style={styles.infoContainer}>
          <Text style={styles.instruction}>Renseignez ses informations</Text>
          <Field name="firstname" placeholder="Prénom" component={TextField} type="string" />
          <Field name="lastname" placeholder="Nom" component={TextField} type="string" />
          <Field name="number" placeholder="Numéro de téléphone" component={TextField} type="string" />
        </View>
        <Text style={styles.instruction}>Choisissez ses créneaux</Text>
        <View style={styles.slotsContainer}>
          <View style={styles.twoSlotsContainer}>
            <Field name="morning" component={this.renderField('Matin')} />
            <Field name="lunch" component={this.renderField('Midi')} />
          </View>
          <View style={styles.twoSlotsContainer}>
            <Field name="afternoon" component={this.renderField('Après-midi')} />
            <Field name="evening" component={this.renderField('Soir')} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <FullButton onPress={this.props.handleSubmit} title="Enregistrer" />
        </View>
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

const styles = StyleSheet.create({
  infoContainer: {
    marginVertical: 5,
  },
  slotsContainer: {
    flexDirection: 'row',
  },
  twoSlotsContainer: {
    width: 150,
  },
  instruction: {
    fontSize: theme.fontSize.normal,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

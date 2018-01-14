//@flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { TextField, Checkbox } from 'nholeMobileApp/src/components';
import { addClient } from '../../../modules/Clients';
import theme from 'nholeMobileApp/src/theme';

class ClientAdditionForm extends Component<DispatchProps, void> {
  renderField = text => ({ input: { value, onChange } }) => (
    <Checkbox text={text} onPress={() => onChange(!value)} isChecked={value} />
  );

  render() {
    return (
      <View>
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
      </View>
    );
  }
}
type DispatchProps = {
  onSubmit: Function,
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  onSubmit: values => dispatch(addClient(values)),
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'clientAddition' }));
export default enhance(ClientAdditionForm);

const styles = StyleSheet.create({
  infoContainer: {
    marginVertical: theme.margin.vertical.small,
  },
  slotsContainer: {
    flexDirection: 'row',
  },
  twoSlotsContainer: {
    width: theme.width.halfPage,
  },
  instruction: {
    fontSize: theme.fontSize.normal,
    fontWeight: 'bold',
    marginBottom: theme.margin.vertical.small,
  },
});

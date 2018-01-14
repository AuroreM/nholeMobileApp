// @flow

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { submit as submitForm } from 'redux-form';
import { connect } from 'react-redux';

import {
  deleteClient,
  isClientEditionModalVisibleSelector,
  openClientEditionModal,
  closeClientEditionModal,
} from '../../../modules/Clients';
import { FullButton } from '../../../components';
import theme from 'nholeMobileApp/src/theme';
import ClientAdditionForm from '../../ClientAddition/components/ClientAdditionForm';
import { editClient } from '../../../modules/Clients';
import type { StateType } from '../../../modules/reducers';

class Client extends React.Component<DispatchProps & StateProps & OwnProps, void> {
  onDelete = () => this.props.deleteClient(this.props.client.id);

  renderSlotsString = () => {
    let slots = '';
    const translations = {
      morning: 'Matin',
      lunch: 'Midi',
      afternoon: 'Après-midi',
      evening: 'Soir',
    };
    Object.keys(translations).forEach(slot => {
      if (this.props.client[slot]) {
        slots += `${translations[slot]}, `;
      }
    });

    return slots.substring(0, slots.length - 2);
  };

  editClient = () => {
    Keyboard.dismiss();
    this.props.submitForm('clientAddition');
  };

  openModal = () => this.props.openClientEditionModal(this.props.client.id);
  closeModal = () => this.props.closeClientEditionModal(this.props.client.id);

  renderModal = () => {
    return (
      <Modal visible={!!this.props.isClientEditionModalVisible} onRequestClose={this.closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalTitle}>Modifier ce client</Text>
            <TouchableOpacity onPress={this.closeModal}>
              <Icon name="close" size={20} />
            </TouchableOpacity>
          </View>
          <ClientAdditionForm initialValues={this.props.client} onSubmitForm={this.props.onSubmitForm} />
          <View style={theme.buttonContainer}>
            <FullButton onPress={this.editClient} title="Modifier" />
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.openModal}>
          <View style={this.props.style}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>
                {this.props.client.firstname} {this.props.client.lastname}
              </Text>
              <TouchableOpacity onPress={this.onDelete}>
                <Icon name="close" size={24} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>N° de téléphone : {this.props.client.number}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Créneaux : </Text>
              <Text style={styles.info}>{this.renderSlotsString()}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {this.renderModal()}
      </View>
    );
  }
}

type OwnProps = {
  client: any,
  style?: any,
  deleteClient: Function,
};

type DispatchProps = {
  submitForm: Function,
  onSubmitForm: Function,
  openClientEditionModal: Function,
  closeClientEditionModal: Function,
};

type StateProps = {
  isClientEditionModalVisible: ?boolean,
};

const mapStateToProps = (state: StateType, ownProps: OwnProps): StateProps => ({
  isClientEditionModalVisible: isClientEditionModalVisibleSelector(state, ownProps.client.id),
});
const mapDispatchToProps: DispatchProps = {
  submitForm,
  onSubmitForm: editClient,
  openClientEditionModal,
  closeClientEditionModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: theme.margin.vertical.small,
  },
  name: {
    fontSize: theme.fontSize.normal,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  info: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.small,
  },
  icon: {
    color: theme.color.red,
  },
  text: {
    fontSize: theme.fontSize.small,
  },
  modalContainer: {
    margin: theme.margin.modal,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.margin.vertical.normal,
  },
  modalTitle: { fontSize: theme.fontSize.header, color: theme.color.gray },
});

// @flow

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { deleteClient } from '../../../modules/Clients';
import theme from 'nholeMobileApp/src/theme';

class Client extends React.Component<Props, void> {
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

  render() {
    return (
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
          <Text>N° de téléphone : </Text>
          <Text>{this.props.client.number}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>Créneaux : </Text>
          <Text style={styles.info}>{this.renderSlotsString()}</Text>
        </View>
      </View>
    );
  }
}

type Props = {
  client: any,
  style?: any,
  deleteClient: Function,
};

export default Client;

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    color: theme.color.red,
  },
});

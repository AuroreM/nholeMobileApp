import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Client extends React.Component {
  styles = getStyles();

  onDelete = () => this.props.deleteClient(this.props.client.item.id);

  render() {
    return (
      <View>
        <View style={this.styles.nameContainer}>
          <Text style={this.styles.name}>
            {this.props.client.item.firstname} {this.props.client.item.lastname}
          </Text>
          <TouchableOpacity onPress={this.onDelete}>
            <Icon name="close" size={24} style={{ color: 'rgb(220, 20, 60)' }} />
          </TouchableOpacity>
        </View>
        <View style={this.styles.infoContainer}>
          <Text>N° de téléphone : </Text>
          <Text>{this.props.client.item.number}</Text>
        </View>
        <View style={this.styles.infoContainer}>
          <Text>Créneaux : </Text>
          <Text style={this.styles.info}>
            {this.props.client.item.morning ? 'Matin, ' : ''}
            {this.props.client.item.lunch ? 'Midi, ' : ''}
            {this.props.client.item.afternoon ? 'Après-midi, ' : ''}
            {this.props.client.item.evening ? 'Soirée, ' : ''}{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const getStyles = () =>
  StyleSheet.create({
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
  });
export default Client;

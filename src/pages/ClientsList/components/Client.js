import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Client extends React.Component {
  render() {
    return (
      <View>
        <View style={{ position: 'relative' }}>
          <Text>
            {this.props.client.item.firstname} {this.props.client.item.lastname}{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.deleteClient(this.props.client.item.id);
            }}
            title="X"
            style={{ height: 20, width: 20, backgroundColor: 'red' }}
          />
        </View>
        <Text>N° de téléphone : {this.props.client.item.number}</Text>
        <Text>
          Créneaux : {this.props.client.item.morning ? 'Matin, ' : ''}
          {this.props.client.item.lunch ? 'Midi, ' : ''}
          {this.props.client.item.afternoon ? 'Après-midi, ' : ''}
          {this.props.client.item.evening ? 'Soirée, ' : ''}{' '}
        </Text>
      </View>
    );
  }
}

export default Client;

import React from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';

import Client from './components/Client';
import { getClients, deleteClient, updateClientsListAfterOneDeleted } from '../../modules/Clients/';
import { Page, FullButton } from 'nholeMobileApp/src/components';
import navigationHeader from '../../utils/navigationHeader';

class ClientsList extends React.Component {
  static navigationOptions = navigationHeader('Clients');

  componentWillMount() {
    this.props.getClients();
  }

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <Text>Mes clients</Text>
        {!this.props.clients ? (
          <p />
        ) : (
          <View>
            <FlatList
              data={this.props.clients.list}
              renderItem={client => <Client client={client} key={client.id} deleteClient={this.props.deleteClient} />}
              keyExtractor={this.keyExtractor}
            />
          </View>
        )}
        <FullButton onPress={() => this.props.navigation.navigate('clientAddition')} title={'Ajouter un client'} />
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteClient: clientId => {
    dispatch(updateClientsListAfterOneDeleted(clientId));
    dispatch(deleteClient(clientId));
  },
  getClients: () => dispatch(getClients()),
});

const mapStateToProps = state => ({
  // loading: state.loading,
  clients: state.clients,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);

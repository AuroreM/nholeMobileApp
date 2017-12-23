import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';

import Client from './components/Client';
import { getClients, deleteClient, updateClientsListAfterOneDeleted } from '../../modules/Clients/';
import { Page, FullButton } from 'nholeMobileApp/src/components';
import navigationHeader from '../../utils/navigationHeader';

class ClientsList extends React.Component {
  static navigationOptions = navigationHeader('Clients', true);

  componentWillMount() {
    this.props.getClients();
  }

  renderClient = client => (
    <Client style={styles.clientContainer} client={client} key={client.id} deleteClient={this.props.deleteClient} />
  );

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <View style={styles.buttonsContainer}>
          <FullButton
            onPress={() => this.props.navigation.navigate('clientAddition')}
            title={'Ajouter un client'}
            secondaryButton
          />
        </View>
        {!this.props.clients ? (
          <View />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList data={this.props.clients.list} renderItem={this.renderClient} keyExtractor={this.keyExtractor} />
          </ScrollView>
        )}
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

const styles = StyleSheet.create({
  clientContainer: {
    marginVertical: 10,
  },
  buttonsContainer: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

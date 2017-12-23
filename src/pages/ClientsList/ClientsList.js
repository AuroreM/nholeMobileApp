// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import type { NavigationScreenProp } from 'react-navigation';

import Client from './components/Client';
import { getClients, deleteClient, updateClientsListAfterOneDeleted } from '../../modules/Clients/';
import { Page, FullButton } from 'nholeMobileApp/src/components';
import navigationHeader from '../../utils/navigationHeader';
import type { ExistingClientType } from '../../modules/Clients/reducer';

class ClientsList extends React.Component<DispatchProps & StateProps & NavigationScreenProp, void> {
  static navigationOptions = navigationHeader('Clients', true);

  componentWillMount() {
    this.props.getClients();
  }

  renderClient = ({ item }: { item: ExistingClientType }) => {
    console.log(item);
    return <Client style={styles.clientContainer} client={item} key={item.id} deleteClient={this.props.deleteClient} />;
  };
  keyExtractor = (item: ExistingClientType) => String(item.id);

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <View style={styles.buttonContainer}>
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
            <FlatList data={this.props.clients} renderItem={this.renderClient} keyExtractor={this.keyExtractor} />
          </ScrollView>
        )}
      </Page>
    );
  }
}

type DispatchProps = {
  deleteClient: Function,
  getClients: Function,
};

type StateProps = {
  clients: ExistingClientType[],
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  deleteClient: clientId => {
    dispatch(updateClientsListAfterOneDeleted(clientId));
    dispatch(deleteClient(clientId));
  },
  getClients: () => dispatch(getClients()),
});

const mapStateToProps = (state): StateProps => ({
  // loading: state.loading,
  clients: state.clients.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);

const styles = StyleSheet.create({
  clientContainer: {
    marginVertical: 10,
  },
  buttonContainer: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

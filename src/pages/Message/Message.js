// @flow

import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import type { NavigationScreenProp } from 'react-navigation';

import { Page, Checkbox, FullButton } from 'nholeMobileApp/src/components';
import { sendMessage } from '../../modules/Message/actions';
import { logout } from '../../modules/User/actions';
import navigationHeader from '../../utils/navigationHeader';
import theme from 'nholeMobileApp/src/theme';

class Message extends Component<DispatchProps & NavigationScreenProp, StateType> {
  static navigationOptions = navigationHeader('Message');

  state = {
    slot: '',
    message: '',
  };

  handleTouchTap = slot => {
    this.setState({ slot });
  };

  sendMessageToClient = () => {
    Keyboard.dismiss();
    this.props.sendMessage(this.state.message, this.state.slot);
  };

  render() {
    return (
      <Page backgroundColor={'#fff'}>
        <TextInput
          style={styles.message}
          placeholder="Entrez votre message ici :)"
          onChangeText={message => this.setState({ message })}
          underlineColorAndroid={theme.color.blue}
          multiline
        />
        <Text style={styles.text}>Choisissez le créneau :</Text>
        <View style={styles.container}>
          <View style={styles.radioButtons}>
            <Checkbox
              style={styles.radioButton}
              text={'Matin'}
              onPress={() => this.handleTouchTap('morning')}
              isChecked={this.state.slot === 'morning' ? true : false}
              isRadioButton
            />
            <Checkbox
              style={styles.radioButton}
              text={'Midi'}
              onPress={() => this.handleTouchTap('lunch')}
              isChecked={this.state.slot === 'lunch' ? true : false}
              isRadioButton
            />
          </View>
          <View style={styles.radioButtons}>
            <Checkbox
              style={styles.radioButton}
              text={'Après-midi'}
              onPress={() => this.handleTouchTap('afternoon')}
              isChecked={this.state.slot === 'afternoon' ? true : false}
              isRadioButton
            />
            <Checkbox
              style={styles.radioButton}
              text={'Soir'}
              onPress={() => this.handleTouchTap('evening')}
              isChecked={this.state.slot === 'evening' ? true : false}
              isRadioButton
            />
          </View>
        </View>
        <View style={theme.buttonsContainer}>
          <FullButton onPress={this.sendMessageToClient} title="Envoyer" disabled={!this.state.slot} />
          <FullButton
            onPress={() => this.props.navigation.navigate('clients')}
            title="Voir mes clients"
            secondaryButton
          />
        </View>
        <View style={styles.logoutButtonContainer}>
          <FullButton onPress={this.props.logout} title="Se déconnecter" secondaryButton />
        </View>
      </Page>
    );
  }
}

type StateType = {
  slot: string,
  message: string,
};

type DispatchProps = {
  sendMessage: Function,
  logout: Function,
};

const mapDispatchToProps: DispatchProps = {
  sendMessage,
  logout,
};

export default connect(null, mapDispatchToProps)(Message);

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.margin.vertical.normal,
    flexDirection: 'row',
  },
  radioButtons: {
    width: theme.width.halfPage,
  },
  radioButton: {
    marginVertical: theme.margin.vertical.small,
  },
  message: {
    height: theme.height.bigTextInput,
    fontSize: theme.fontSize.normal,
  },
  text: {
    fontSize: theme.fontSize.normal,
    marginTop: theme.margin.vertical.normal,
  },
  logoutButtonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingVertical: theme.padding.vertical.normal,
  },
});

// @flow

import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import type { NavigationScreenProp } from 'react-navigation';

import { Page } from 'nholeMobileApp/src/components';
import { sendMessage } from '../../modules/Message/actions';

class Message extends Component<DispatchProps & NavigationScreenProp, StateType> {
  static navigationOptions = {
    title: 'Message',
    headerLeft: null,
  };
  state = {
    slot: '',
    message: '',
  };
  handleTouchTap = slot => {
    this.setState({ slot });
  };
  sendMessageToClient = () => {
    this.props.sendMessage(this.state.message, this.state.slot);
  };

  render() {
    const styles = {
      underlineFocusStyle: {
        borderColor: 'rgb(30,144,255)',
      },
      floatingLabelFocusStyle: {
        color: 'rgb(30,144,255)',
      },
    };
    return (
      <Page backgroundColor={'#fff'}>
        <Text>Envoyez un message</Text>
        <TextInput
          style={{ height: 40, borderColor: '#808080', borderWidth: 1 }}
          placeholder="Message"
          onChangeText={message => this.setState({ message })}
        />
        <View>
          <Button
            title={'Matin'}
            onPress={() => this.handleTouchTap('morning')}
            color={this.state.slot === 'morning' ? 'rgb(30,144,255)' : '#808080'}
          />
          <Button
            title={'Midi'}
            onPress={() => this.handleTouchTap('lunch')}
            color={this.state.slot === 'lunch' ? 'rgb(30,144,255)' : '#808080'}
          />
          <Button
            title={'Après-midi'}
            onPress={() => this.handleTouchTap('afternoon')}
            color={this.state.slot === 'afternoon' ? 'rgb(30,144,255)' : '#808080'}
          />
          <Button
            title={'Soir'}
            onPress={() => this.handleTouchTap('evening')}
            color={this.state.slot === 'evening' ? 'rgb(30,144,255)' : '#808080'}
          />
        </View>
        <Button onPress={this.sendMessageToClient} title="Envoyer" disabled={!this.state.slot} />
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
};

const mapDispatchToProps: DispatchProps = {
  sendMessage,
};

export default connect(null, mapDispatchToProps)(Message);

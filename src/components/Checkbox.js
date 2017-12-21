// @flow

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class Checkbox extends Component<Props, void> {
  styles = getStyles();

  render() {
    const styles = this.styles;

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Icon name={this.props.isChecked ? 'check' : 'check-box-outline-blank'} size={20} style={styles.box} />
        {this.props.text && <Text style={styles.label}>{this.props.text}</Text>}
      </TouchableOpacity>
    );
  }
}

function getStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
    },
    box: {
      color: 'rgb(30,144,255)',
      opacity: 0.65,
    },
    boxIfChecked: {
      opacity: 1,
    },
    label: {
      opacity: 0.65,
      color: 'rgb(64,64,64)',
      fontSize: 17,
      width: 300,
      textAlign: 'justify',
      marginLeft: 15,
    },
    labelIfChecked: {
      opacity: 1,
    },
  });
}

type Props = {
  text: string,
  onPress: Function,
  isChecked: boolean,
};

export default Checkbox;

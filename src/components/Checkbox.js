// @flow

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class Checkbox extends Component<Props, void> {
  styles = getStyles();

  render() {
    const styles = this.styles;

    const selectedIcon = this.props.isRadioButton ? 'radio-button-checked' : 'check';
    const unselectedIcon = this.props.isRadioButton ? 'radio-button-unchecked' : 'check-box-outline-blank';

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Icon name={this.props.isChecked ? selectedIcon : unselectedIcon} size={22} style={styles.box} />
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
      alignItems: 'center',
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
      fontSize: 20,
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

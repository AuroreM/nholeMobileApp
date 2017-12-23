// @flow

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import theme from 'nholeMobileApp/src/theme';

class Checkbox extends Component<Props, void> {
  render() {
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

type Props = {
  text: string,
  onPress: Function,
  isChecked: boolean,
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    color: theme.color.blue,
    opacity: 0.65,
  },
  boxIfChecked: {
    opacity: 1,
  },
  label: {
    opacity: 0.65,
    color: theme.color.gray,
    fontSize: theme.fontSize.normal,
    textAlign: 'justify',
    marginLeft: 15,
  },
  labelIfChecked: {
    opacity: 1,
  },
});

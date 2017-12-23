// @flow
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import Button from './Button';
import theme from 'nholeMobileApp/src/theme';

class FullButton extends Component<Props, void> {
  render() {
    const { title, secondaryButton, ...rest } = this.props;
    return (
      <Button {...rest}>
        <View style={[styles.button, secondaryButton && styles.secondaryButton]}>
          <Text style={[styles.buttonText, secondaryButton && styles.secondaryButtonText]}>{title}</Text>
        </View>
      </Button>
    );
  }
}

type Props = {
  title: string,
  secondaryButton?: boolean,
};

export default FullButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.gray,
    borderRadius: theme.border.radius,
    width: theme.width.touchable,
    height: theme.height.touchable,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  buttonText: {
    color: theme.color.blue,
    fontSize: theme.fontSize.normal,
  },
  secondaryButtonText: {
    color: theme.color.gray,
    fontSize: theme.fontSize.normal,
  },
});

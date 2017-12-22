// @flow
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import Button from './Button';

class FullButton extends Component<Props, void> {
  render() {
    const styles = getStyles();
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

const getStyles = () =>
  StyleSheet.create({
    button: {
      backgroundColor: 'rgb(64,64,64)',
      borderRadius: 5,
      width: 200,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    buttonText: {
      color: 'rgb(30,144,255)',
      fontSize: 18,
    },
    secondaryButtonText: {
      color: 'rgb(64,64,64)',
      fontSize: 16,
    },
  });
export default FullButton;

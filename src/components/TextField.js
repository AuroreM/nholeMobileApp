import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

class TextField extends React.Component {
  styles = getStyles();

  render() {
    const { input, disabled, ...otherProps } = this.props;
    return (
      <TextInput
        ref="input"
        style={this.styles.textInput}
        editable={!disabled}
        underlineColorAndroid="transparent"
        secureTextEntry={false}
        {...input}
        value={this.props.input.value}
        {...otherProps}
      />
    );
  }
}

const getStyles = () =>
  StyleSheet.create({
    textInput: {
      height: 42,
      color: '#fff',
      fontSize: 20,
      paddingVertical: 10,
    },
  });

export default TextField;

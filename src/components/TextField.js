// @flow
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

class TextField extends React.Component<Props, void> {
  styles = getStyles();

  render() {
    const { input, disabled, placeholder, secureTextEntry, ...otherProps } = this.props;
    return (
      <TextInput
        ref="input"
        style={this.styles.textInput}
        editable={!disabled}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        {...input}
        value={this.props.input.value}
        placeholder={placeholder}
      />
    );
  }
}

type Props = {
  disabled?: boolean,
  secureTextEntry?: boolean,
  input: { value: string },
  placeholder?: string,
};

const getStyles = () =>
  StyleSheet.create({
    textInput: {
      height: 42,
      color: '#808080',
      fontSize: 20,
      paddingVertical: 10,
    },
  });

export default TextField;
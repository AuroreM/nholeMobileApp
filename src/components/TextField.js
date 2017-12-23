// @flow
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import theme from 'nholeMobileApp/src/theme';

class TextField extends React.Component<Props, void> {
  render() {
    const { input, disabled, placeholder, secureTextEntry, ...otherProps } = this.props;
    return (
      <TextInput
        ref="input"
        style={styles.textInput}
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

export default TextField;

const styles = StyleSheet.create({
  textInput: {
    height: 42,
    color: '#808080',
    fontSize: theme.fontSize.normal,
    paddingVertical: 10,
  },
});

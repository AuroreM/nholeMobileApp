// @flow
import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    opacity: 0.9,
    backgroundColor: 'transparent',
  },
});

export default (props: Props) => {
  const { style, disabled, children, ...rest } = props;
  const MaybeTouchable = disabled || !props.onPress ? View : TouchableOpacity;
  return (
    <MaybeTouchable activeOpacity={1} style={[styles.button, style]} {...rest}>
      {children}
    </MaybeTouchable>
  );
};

type Props = {
  style?: any,
  children?: any,
  disabled?: boolean,
};

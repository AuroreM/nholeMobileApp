// @flow

import React, { PropTypes } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default (props: PropsType) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View
      style={[
        styles.page,
        {
          backgroundColor: props.backgroundColor,
          paddingHorizontal: 24,
          paddingTop: 16,
        },
      ]}
    >
      {props.children}
    </View>
  </TouchableWithoutFeedback>
);

type PropsType = {
  children: React$Element<*> | React$Element<*>[],
  backgroundColor: string,
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

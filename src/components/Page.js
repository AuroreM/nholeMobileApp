// @flow

import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

export default (props: PropsType) => (
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

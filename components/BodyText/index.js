import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style={style.BodyText}>{props.children}</Text>;

const style = StyleSheet.create({
  BodyText: {
    fontFamily: 'open-sans',
  },
});

export default BodyText;
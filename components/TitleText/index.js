import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => <Text style={{...style.TitleText, ...props.style}}>{props.children}</Text>;

const style = StyleSheet.create({
  TitleText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

export default TitleText;
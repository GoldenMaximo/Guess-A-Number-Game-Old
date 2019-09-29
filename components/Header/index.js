import React from 'react';
import { View, Text } from 'react-native';
import TitleText from './../TitleText';
import Styles from './style';

const Header = props => {
  return (
    <View style={Styles.header}>
      <TitleText style={Styles.headerTitle}>{props.title}</TitleText>
    </View>
  )
};

export default Header;
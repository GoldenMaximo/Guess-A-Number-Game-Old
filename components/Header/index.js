import React from 'react';
import { View, Text } from 'react-native';
import Styles from './style';

const Header = props => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.headerTitle}>{props.title}</Text>
    </View>
  )
};

export default Header;
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default MainButton;
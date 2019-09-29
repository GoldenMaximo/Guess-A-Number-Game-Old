import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Rounds it took for your cheap Nokia to get it right:</Text>
      <Text>{props.numberOfRounds}</Text>
      <Text>Number was: {props.userChoice}</Text>
      <Button title="ONE MORE TIME!" onPress={() => props.onNewGame()} />
    </View>
  );
}

export default GameOverScreen;
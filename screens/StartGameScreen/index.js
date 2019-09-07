import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.numberSelectionContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainerRow}>
          <Button title='Reset' />
          <Button title='Confirm' />
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen;
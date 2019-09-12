import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import Colors from './../../constants/colors';
import Input from './../../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber && chosenNumber <= 99) {
      setEnteredValue('');
      setConfirmed(true);
      setSelectedNumber(parseInt(enteredValue));
    } else {
      Alert.alert('Ayo what the fuck!', 'Valid numbers are between 1 and 99 nigga!', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
    }
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.numberSelectionContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            placeholder='666'
            blurOnSubmit
            autoCapitalze='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainerRow}>
            <View style={styles.customButton}>
              <Button title='Reset' color={Colors.accent} onPress={resetInputHandler} />
            </View>
            <View style={styles.customButton}>
              <Button title='Confirm' color='#00bfa5' onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen;
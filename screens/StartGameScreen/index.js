import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import Colors from './../../constants/colors';
import Input from './../../components/Input';
import NumberContainer from './../../components/NumberContainer';
import BodyText from './../../components/BodyText';
import TitleText from './../../components/TitleText';
import MainButton from './../../components/MainButton';

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

    Keyboard.dismiss();

    if (chosenNumber && chosenNumber <= 99) {
      setEnteredValue('');
      setConfirmed(true);
      setSelectedNumber(parseInt(enteredValue));
    } else {
      Alert.alert('Ayo what you tryinna do?!', 'Valid numbers are between 1 and 99 nigga!', [{ text: 'Aiight', style: 'destructive', onPress: resetInputHandler }])
    }
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You chose</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        {/* <Button title="LET'S ROLL!" onPress={() => props.onStartGame(selectedNumber)} /> */}
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>LET'S ROLL!</MainButton>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.numberSelectionContainer}>
          <BodyText>C'mon, pick a number!</BodyText>
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
              <Button title='Confirm' color={Colors.iceOnTheCake} onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen;
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from './styles';
import NumberContainer from './../../components/NumberContainer';
import Card from './../../components/Card';
import TitleText from './../../components/TitleText';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor((Math.random() * (max - min))) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, props.userChoice));
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(99);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if ((direction === 'lower' && currentGuess < props.userChoice || direction === 'higher' && currentGuess > props.userChoice)) {
      Alert.alert('Yo why you lying?', 'You tryinna mess with me or something? We can throw hands if you want.', [
        { text: 'Aiight chill...', style: 'cancel' }
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  }

  return (
    <View style={styles.screen}>
      <TitleText>Your cheap smartphone guessed</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LIL BIT LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
        <Button title="EH, GO HIGHER" onPress={nextGuessHandler.bind(this, 'higher')}/>
      </Card>
    </View>
  )
};

export default GameScreen;
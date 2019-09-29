import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fecthFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fecthFonts} onFinish={() => setDataLoaded(true)} onError={error => console.log(error)} />;
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);

  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };

  const decideWhichScreenToDisplay = () => {
    if (userNumber && guessRounds <= 0) {
      return (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      )
    } else if (guessRounds > 0) {
      return (
        <GameOverScreen numberOfRounds={guessRounds} userChoice={userNumber} onNewGame={configureNewGameHandler} />
      )
    } else {
      return (
        <StartGameScreen onStartGame={startGameHandler} />
      )
    }
  };

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'/>
      {decideWhichScreenToDisplay()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

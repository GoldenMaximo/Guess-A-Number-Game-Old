import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

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

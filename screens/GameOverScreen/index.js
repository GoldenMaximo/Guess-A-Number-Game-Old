import React, { useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';
import BodyText from './../../components/BodyText';
import TitleText from './../../components/TitleText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.TitleText}>The game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require('./../../assets/ainsley.webp')} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your cheap Nokia took <Text style={styles.highlight}>{props.numberOfRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userChoice}</Text>.
        </BodyText>
      </View>
      <Button title="ONE MORE TIME!" onPress={() => props.onNewGame()} />
    </View>
  );
}

export default GameOverScreen;
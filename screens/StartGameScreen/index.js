import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import Colors from './../../constants/colors';
import Input from './../../components/Input';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.numberSelectionContainer}>
        <Text>Select a Number</Text>
        <Input style={styles.input} placeholder='666' blurOnSubmit autoCapitalze='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} />
        <View style={styles.buttonContainerRow}>
          <View style={styles.customButton}>
            <Button title='Reset' color={Colors.accent} />
          </View>
          <View style={styles.customButton}>
            <Button title='Confirm' color='#00bfa5' />
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen;
import { StyleSheet } from 'react-native';
import Colors from './../../constants/colors';
import { white } from 'ansi-colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.screenBackground,
  },
  numberContainer: {
    marginVertical: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 400,
    maxWidth: '80%'
  },
  TitleText: {
    color: 'white',
  }
});

export default styles;
import { StyleSheet } from 'react-native';
import Colors from './../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.iceOnTheCake,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Colors.borderColor,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
  },
});

export default styles;
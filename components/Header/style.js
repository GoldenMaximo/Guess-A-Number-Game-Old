import { StyleSheet } from "react-native";
import Colors from './../../constants/colors';

const Styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#b2ebf2',
  },
  headerTitle: {
    color: 'white',
  }
});

export default Styles;
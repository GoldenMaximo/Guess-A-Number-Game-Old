import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#263238',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
  },
  numberSelectionContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainerRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  customButton: {
    width: '40%',
    borderWidth: 3,
    borderColor: '#424242',
    borderRadius: 5,
  },
  input: {
    width: 60,
    textAlign: 'center',
  },
});

export default styles;
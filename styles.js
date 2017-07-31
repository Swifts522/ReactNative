import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  display: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  displayText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },
  keyboard: {
    flex: 8, 
    backgroundColor: '#ebe4e4'
  },
  keyboardSmallButton: 
  {
    flex: 0.66,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },
  keyboardButton: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },
  keyboardButtonOrange: 
  {
    backgroundColor: '#FF7F50'
  },
  keyboardButtonText:
  {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  inputRow:
  {
    flex: 1,
    flexDirection: 'row'
  }
});

export default styles;
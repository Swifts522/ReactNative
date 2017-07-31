/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles.js';

const inputButtonsText = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, ',', '=']
];

export default class NativeProject extends Component 
{
  constructor(props) {
      super(props);

      this.state = {
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null
      }
  }
  render() 
  {
    return (
      <View style = {styles.container}>
        <View style = {styles.display}>
          <Text style={styles.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style = {styles.keyboard}>{this._renderKeyboard()}</View>
      </View>
    );
  }
  _renderKeyboard()
  {
    let views = [];

    for(var i = 0; i < inputButtonsText.length; i++)
    {
      let row = inputButtonsText[i];

      let inputRow = [];
      for(var j = 0; j < row.length; j++)
      {
        let input = row[j];

        inputRow.push(<KeyboardButton value = {input} typestyle = {(j+1 == row.length) ? true : false} highlight={this.state.selectedSymbol === input} onPress={this._onKeyboardButtonPressed.bind(this, input)} indexbutton={i  + '-' + j} key={i  + '-' + j} />);
      }
      views.push(<View style={styles.inputRow} key={"row-" + i}>{inputRow}</View>);
    }
    return views;
  } 
    _onKeyboardButtonPressed(input) 
    {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(num) {
        //let inputValue = (this.state.inputValue * 10) + num;

        let inputVal = !this.state.inputValue ? num.toString() : (this.state.inputValue + num.toString());

        this.setState({
            inputValue: inputVal
        })
    }

   _handleStringInput(str) {
        switch (str) 
        {
            case 'AC':
                this.setState({
                    selectedSymbol: null,
                    previousInputValue: 0,
                    inputValue: 0
                });
                break; 
            case '+/-':
                this.setState({
                    inputValue: -this.state.inputValue
                });
                break;  
            case '%':
                let inputVal = this.state.inputValue.replace(',', '.');
                let result = eval(inputVal/100).toString();
                this.setState({
                    inputValue: result.replace('.', ',')
                });
                break; 
            case '+/-':
                this.setState({
                    inputValue: -this.state.inputValue
                });
                break;                       
            case '+':
            case '÷':
            case 'x':
            case '%':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
            case ',':
                this.setState({
                    inputValue: this.state.inputValue + ','
                });
                break;              
            case '=':
              let symbol = this.state.selectedSymbol,
                  inputValue = this.state.inputValue.replace(',', '.'),
                  previousInputValue = this.state.previousInputValue.replace(',', '.');

              if (!symbol) {
                  return;
              }
              else if(symbol == '÷') symbol = '/';
              else if(symbol == 'x') symbol = '*';
              let val = eval(previousInputValue + symbol + inputValue).toString();

              this.setState({
                  previousInputValue: 0,
                  inputValue: val.replace('.', ','),
                  selectedSymbol: null
              });
              break;
        }
    }
}

class KeyboardButton extends Component 
{
    render() 
    {
        return (
            <TouchableOpacity style= {[(this.props.indexbutton == '4-2') ? styles.keyboardSmallButton : styles.keyboardButton, this.props.typestyle ? styles.keyboardButtonOrange : null]} onPress={this.props.onPress}>
                <Text style={styles.keyboardButtonText}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

AppRegistry.registerComponent('NativeProject', () => NativeProject);

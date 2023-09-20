import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const plusPressed = () => {
    Alert.alert('Result: ' + (Number(num1) + Number(num2)));
  };
  const minusPressed = () => {
    Alert.alert('Result: ' + (Number(num1) - Number(num2)));
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={num1 => setNum1(num1)} value={num1} inputMode='numeric' />
      <TextInput style={styles.input} onChangeText={num2 => setNum2(num2)} value={num2} inputMode='numeric' />
      <View style={styles.buttonContainer}>
        <Button onPress={plusPressed} title="+" />
        <Button onPress={minusPressed} title="-" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 100
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});
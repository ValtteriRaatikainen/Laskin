import React, { useState } from 'react';
import { StyleSheet, View,Button, Text, TextInput} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const plusPressed = () => {
    setResult(Number(num1) + Number(num2));
  };

  const minusPressed = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
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
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  historyItem: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    width: 200,
    alignItems: 'center',
  },
});
import React, { useState } from 'react';
import { StyleSheet, View,Button, Text, TextInput, FlatList} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const plusPressed = () => {
    setNum1(parseFloat(num1));
    setNum1(parseFloat(num2));
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    setData([...data, { key: `${num1} + ${num2} = ${sum}` }]);
    setNum1('');
    setNum2('');
  };

  const minusPressed = () => {
    setNum1(parseFloat(num1));
    setNum1(parseFloat(num2));
    const subtract = parseFloat(num1) - parseFloat(num2);
    setResult(subtract);
    setData([...data, { key: `${num1} - ${num2} = ${subtract}` }]);
    setNum1('');
    setNum2('');
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
      <Text>History:</Text>
      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 300,
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
});
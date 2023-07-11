import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(`Sum: ${sum}`);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    setResult(`Difference: ${difference}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddition}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
        <Text style={styles.buttonText}>Subtract</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CalculatorApp;




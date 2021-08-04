import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shaun');
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Enter age"
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        His name is {name} and he is {age} years old
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    margin: 15,
    padding: 5,
    width: 200,
    borderWidth: 1,
    borderColor: '#777',
  },
});

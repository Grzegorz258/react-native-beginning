import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shaun');
  const [person, setPerson] = useState({
    name: 'Mario',
    age: 30,
  });

  const clickHandler = () => {
    setName('Mark');
    setPerson({ name: 'Julio', age: 50 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and he is {person.age} years old
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Click me!" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});

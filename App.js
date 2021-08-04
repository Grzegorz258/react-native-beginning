import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
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
  header: {
    padding: 20,
    backgroundColor: 'pink',
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    padding: 30,
    backgroundColor: 'yellow',
  },
});

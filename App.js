import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import TodoItem from './src/components/TodoItem/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play on the switch', key: '3' },
  ]);

  const pressTodosHandler = (key) => {
    setTodos((prevState) => prevState.filter((item) => item.key != key))
  }

  return (
    <View style={styles.container}>
      <Header text="My todos" />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({ item }) => <TodoItem item={item} pressHandler={pressTodosHandler} />} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

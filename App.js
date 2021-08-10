import React, { useState } from 'react';
import {
  FlatList,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import AddTodo from './src/components/AddTodo/AddTodo';
import Header from './src/components/Header/Header';
import TodoItem from './src/components/TodoItem/TodoItem';
import styles from './App.styles';

const { container, content, list } = styles;

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play on the switch', key: '3' },
  ]);

  const pressTodosHandler = (key) => {
    setTodos((prevState) => prevState.filter((item) => item.key != key));
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      // setText('');
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        { text: 'Understood'},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={container}>
        <Header text="My todos" />
        <View style={content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressTodosHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}



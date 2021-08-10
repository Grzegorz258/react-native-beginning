import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './TodoItem.styles';

const { container } = styles;

const TodoItem = ({ item: {text, key}, pressHandler }) => {
  return (
    <TouchableOpacity style={container} onPress={() => pressHandler(key)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

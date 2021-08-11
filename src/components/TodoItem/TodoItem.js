import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './TodoItem.styles';
import { MaterialIcons } from '@expo/vector-icons';

const { container, todoText, deleteIcon } = styles;

const TodoItem = ({ item: { text, key }, pressHandler }) => {
  return (
    <View style={container}>
      <TouchableOpacity style={deleteIcon} onPress={() => pressHandler(key)}>
        <MaterialIcons name="delete" size={25} color="#333" />
      </TouchableOpacity>
      <Text style={todoText}>{text}</Text>
    </View>
  );
};

export default TodoItem;

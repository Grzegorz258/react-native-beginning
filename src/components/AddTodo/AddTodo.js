import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './AddTodo.styles';

const { input } = styles;

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={input}
        placeholder="Add task"
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        color="coral"
        onPress={() => submitHandler(text, setText)}
        title="Add task"
      />
    </View>
  );
};



export default AddTodo;

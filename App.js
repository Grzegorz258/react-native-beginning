import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';

const initialPeopleData = [
  { name: 'shaun', id: '1' },
  { name: 'yoshi', id: '2' },
  { name: 'mario', id: '3' },
  { name: 'luigi', id: '4' },
  { name: 'peach', id: '5' },
  { name: 'toad', id: '6' },
  { name: 'bowser', id: '7' },
];

export default function App() {
  const [people, setPeople] = useState(initialPeopleData);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevState) => prevState.filter((item) => item.id != id));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          numColumns={2}
          data={people}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => pressHandler(item.id)}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <View style={styles.button}>
        <Button title="Reset list" onPress={() => setPeople(initialPeopleData)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'pink',
  },
  itemText: {
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    marginTop: 30
  }
});

import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          numColumns={2}
          data={people}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        />

        {/* {for comparison} */}
        {/* {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))} */}
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    textAlign: 'center',
  },
});

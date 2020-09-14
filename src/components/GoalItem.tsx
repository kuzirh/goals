import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface itemDataType {
  title: string;
}

const GoalItem = (props: itemDataType) => {
  return (
    <View style={styles.goalItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;

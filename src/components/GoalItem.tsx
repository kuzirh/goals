import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props: { title: string; onDelete: any; id: string }) => {
  return (
    <View style={styles.goalItem}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.onDelete(props.id)}
      >
        <Text>{props.title}</Text>
      </TouchableOpacity>
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

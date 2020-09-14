import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={styles.goalInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='Add' onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: 200,
  },
});

export default GoalInput;

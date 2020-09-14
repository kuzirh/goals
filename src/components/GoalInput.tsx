import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const GoalInput = (props: { onAddGoal: any }) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const goalInputHandler = (enterText: string) => {
    setEnteredGoal(enterText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={styles.goalInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='Add' onPress={() => props.onAddGoal(enteredGoal)} />
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

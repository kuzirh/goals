import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props: {
  onAddGoal: any;
  visible: boolean;
  onCancelAdd: any;
}) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');

  const goalInputHandler = (enterText: string) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.goalInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='Add' onPress={addGoalHandler} />
        <Button
          title='CANCEL'
          color='red'
          onPress={() => props.onCancelAdd()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  goalInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
});

export default GoalInput;

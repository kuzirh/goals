import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<Array<string>>([]);
  const goalInputHandler = (enterText: string) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.goalInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50,
  },
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
  goalItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

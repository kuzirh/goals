import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, FlatList } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<any>([]);
  const goalInputHandler = (enterText: string) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals: Array<object>) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
  };

  return (
    <View style={styles.main}>
      <GoalInput />
      <FlatList
        keyExtractor={(item: any, index) => item.id}
        data={courseGoals}
        renderItem={(itemData: { item: { value: string } }) => (
          <GoalItem title={itemData.item.value} />
        )}
      />
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
});

import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, FlatList } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState<any>([]);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoals: Array<object>) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals((currentGoals: Array<object>) => {
      return currentGoals.filter((goal: any) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.main}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item: any, index) => item.id}
        data={courseGoals}
        renderItem={(itemData: { item: { value: string; id: string } }) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
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

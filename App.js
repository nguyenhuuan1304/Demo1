import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";

import Task from "./components/Task";
import Form from "./components/Form";

export default function App() {
  // chứa ds cv
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    //add task
    setTaskList([...taskList, task]);
  };
  const handleDeleteItem = (index) => {
    Alert.alert('Thông báo', 'Bạn muốn xóa Item', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        let taskListTmp = [...taskList];
        taskListTmp.splice(index,1);
        setTaskList(taskListTmp);
      }},
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo list</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return <Task key={index} title={item} number={index + 1} onDelete={() => handleDeleteItem(index)}/>;
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff7f8",
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  items: {
    marginTop: 25,
  },
});

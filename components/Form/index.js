import React, { useState } from "react";
import { View, Text, Keyboard, TextInput, TouchableOpacity } from "react-native";

import styles from "./style";

const Form = (props) => {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Please a task");
      return false;
    }
    props.onAddTask(task);
    setTask('')
    Keyboard.dismiss();
  };
  console.log("s");
  console.log("s");
  console.log("s");
  console.log("s");
  console.log("s");
  console.log("s");
  console.log("s");
  return (
    <View style={styles.addTask}>
      <TextInput
        value={task}
        style={styles.input}
        placeholder="Your Task"
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.icon}>
          <Text style={styles.iconAdd}>+</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.icon}>
          <Text style={styles.iconAdd}>+11111</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

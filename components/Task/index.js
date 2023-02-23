import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";

import styles from "./style";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.square}>
        <Text style={styles.number}>{props.number}</Text>
      </View>
      <Text style={styles.content}>{props.title}</Text>
      <TouchableOpacity>
        <Button title="Delete" onPress={props.onDelete} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;

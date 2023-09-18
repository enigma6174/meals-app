import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function StepItem({ step, icon = false }) {
  const [pressed, setPressed] = useState(false);

  function onPressStep() {
    setPressed((current) => !current);
  }

  return (
    <Pressable style={styles.listContainer} onPress={onPressStep}>
      <Text style={[styles.list, pressed ? styles.pressed : null]}>{step}</Text>
      {icon && <Octicons name={"dot-fill"} size={12} color={"black"} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 4,
    width: "90%",
    alignItems: "center",
  },
  list: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 4,
  },
  pressed: {
    textDecorationLine: "line-through",
  },
});

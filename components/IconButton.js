import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton(props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons
        name={props.icon || "star-outline"}
        size={props.size || 24}
        color={props.color || "white"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

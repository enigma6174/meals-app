import { StyleSheet, Text, View } from "react-native";

export default function MealFooter(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.duration} min.</Text>
      <Text style={styles.text}>{props.complexity}</Text>
      <Text style={styles.text}>{props.affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: "darkslategrey",
  },
});

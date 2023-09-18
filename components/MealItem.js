import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealFooter from "./MealFooter";

export default function MealItem(props) {
  const navigation = useNavigation();

  function navigationHandler() {
    navigation.navigate("MealsInfo", { mealId: props.id });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={navigationHandler}
      >
        <View>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <MealFooter
          duration={props.duration}
          affordability={props.affordability}
          complexity={props.complexity}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

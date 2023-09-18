import { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import uuid from "react-native-uuid";

import MealFooter from "../components/MealFooter";
import { MEALS } from "../data/dummy-data";
import StepItem from "../components/StepItem";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({ route, navigation }) {
  uuid.v4();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonHandler() {
    console.log("settings_icon");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={headerButtonHandler} />;
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>
      <MealFooter
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity.toUpperCase()}
        affordability={selectedMeal.affordability.toUpperCase()}
      />
      <View style={styles.listWrapper}>
        <Text style={styles.subTitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <StepItem key={uuid.v4()} step={ingredient} />
        ))}
        <Text style={styles.subTitle}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <StepItem key={uuid.v4()} step={step} icon={true} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkorange",
    textAlign: "center",
  },
  subTitle: {
    color: "teal",
    fontSize: 24,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  listWrapper: {
    alignItems: "center",
    marginBottom: 32,
  },
});

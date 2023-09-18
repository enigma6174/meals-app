import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealCards from "../components/MealCards";

function renderFavorite(meal) {
  return (
    <View>
      <Text>{meal.item.title}</Text>
    </View>
  );
}

export default function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favorites.ids);

  const savedMeals = MEALS.filter((item) => {
    return favoriteMealIds.indexOf(item.id) >= 0;
  });

  return (
    <View style={styles.container}>
      {savedMeals.length === 0 ? (
        <View style={styles.warningContainer}>
          <Text style={styles.warning}>No Favorite Meals Added!</Text>
        </View>
      ) : (
        <MealCards data={savedMeals} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
  warningContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  warning: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    color: "red",
  },
});

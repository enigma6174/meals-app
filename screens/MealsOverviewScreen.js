import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMeal(meal) {
    const item = meal.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity.toUpperCase(),
      affordability: item.affordability.toUpperCase(),
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

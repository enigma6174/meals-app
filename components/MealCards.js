import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

export default function MealCards(props) {
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
        data={props.data}
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

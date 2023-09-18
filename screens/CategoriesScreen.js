import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(category) {
    function onCardPress() {
      navigation.navigate("MealsOverview", { categoryId: category.item.id });
    }

    return (
      <CategoryGridTitle
        title={category.item.title}
        color={category.item.color}
        navigationHandler={onCardPress}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

import { FlatList } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTiles
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

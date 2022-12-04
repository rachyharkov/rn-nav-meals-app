import { FlatList } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";

import { CATEGORIES } from "../data/dummy-data";


function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverview")
        }
        return (
            <CategoryGridTiles
              title={itemData.item.title}
              color={itemData.item.color}
              onPress={pressHandler}
            />
      );
    }
    return (
        <FlatList
          data={CATEGORIES}
          key={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
    )
}

export default CategoriesScreen;

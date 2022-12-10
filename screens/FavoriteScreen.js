import { Text, View } from "react-native";
import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoriteScreen() {

    const favoriteMealsCtx = useContext(FavoritesContext)

    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

    return(
        <MealsList items={favoriteMeals} />
    )
}

export default FavoriteScreen
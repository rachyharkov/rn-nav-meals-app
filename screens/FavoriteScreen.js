import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

function FavoriteScreen() {

    // const favoriteMealsCtx = useContext(FavoritesContext)

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

    const favoriteMeals = MEALS.filter(meal => 
        // favoriteMealsCtx.ids.includes(meal.id)
        favoriteMealIds.includes(meal.id)
    )

    if(favoriteMeals.length <= 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        )
    }

    return(
        <MealsList items={favoriteMeals} />
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 20,
        textAlign: 'center'
    }
})
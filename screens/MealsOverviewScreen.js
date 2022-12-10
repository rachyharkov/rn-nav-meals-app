import { useLayoutEffect } from 'react'
import MealsList from '../components/MealsList/MealsList'

import { MEALS, CATEGORIES } from '../data/dummy-data'

function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    // dynamically set header title V2
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    return <MealsList items={displayedMeals} />

}

export default MealsOverviewScreen
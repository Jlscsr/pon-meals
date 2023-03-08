<template>
    <div class="meal">
        <div class="meal__card">
            <div class="meal__card__first-row">
                <div class="meal__card__first-row__meal-details">
                    <div class="meal__card__first-row__meal-details__name">
                        <h1>{{ selectedMeal.strMeal }}</h1>
                    </div>
                    <div class="meal__card__first-row__meal-details__category-country">
                        <h3>{{ selectedMeal.strArea }}</h3>
                        <h3>{{ selectedMeal.strCategory }}</h3>
                    </div>
                    <div class="meal__card__first-row__meal-details__youtube-btn">
                        <a :href="selectedMeal.strYoutube" target="_blank" class="default-button">Video Tutorial</a>
                    </div>
                </div>
                <div class="meal__card__first-row__meal-img">
                    <img :src="selectedMeal.strMealThumb" :alt="selectedMeal.strMeall">
                </div>
            </div>
            <div class="meal__card__second-row">
                <div class="meal__card__second-row__ingredients">
                    <ul>
                        <li v-for="ingredient in ingredients" :key="ingredient">
                            {{ ingredient }}
                        </li>
                    </ul>
                </div>
                <div class="meal__card__second-row__instructions">
                    <p>{{ selectedMeal.strInstructions }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getMeals } from "../composables/PonMeals";
export default {
    setup() {
        let route = useRoute();
        let selectedMeal = ref(null);

        if (route.params.id) {
            selectedMeal.value = getMeals.value.find((meal) => meal.idMeal === route.params.id);
        }

        const ingredients = computed(() => {
            let ingredientsKey = Object.keys(selectedMeal.value)
                .filter((key) => key.startsWith('strIngredient') && selectedMeal.value[key]);

            console.log(ingredientsKey);

            let measureKeys = Object.keys(selectedMeal.value)
                .filter((key) => key.startsWith('strMeasure') && selectedMeal.value[key]);

            console.log(measureKeys);

            return ingredientsKey.map((ingredientKey, index) => {
                let ingredient = selectedMeal.value[ingredientKey];
                let measure = selectedMeal.value[measureKeys[index]];
                return `${ingredient} (${measure})`;
            })
        })



        return {
            route,
            selectedMeal,
            ingredients
        }
    }
}
</script>

<style lang="scss">
@import "./style/fullDetails.scss";
</style>
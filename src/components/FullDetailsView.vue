<template>
    <div class="meal">
        <div class="meal__card">
            <div class="meal__card__first-row">
                <div class="meal__card__first-row__meal-details">
                    <div class="meal__card__first-row__meal-details__name">
                        <h1>{{ mealsDetails.strMeal }}</h1>
                    </div>
                    <div class="meal__card__first-row__meal-details__category-country">
                        <h3>{{ mealsDetails.strArea }}</h3>
                        <h3>{{ mealsDetails.strCategory }}</h3>
                    </div>
                    <div class="meal__card__first-row__meal-details__youtube-btn">
                        <a :href="mealsDetails.strYoutube" target="_blank" class="default-button">Video Tutorial</a>
                    </div>
                </div>
                <div class="meal__card__first-row__meal-img">
                    <img :src="mealsDetails.strMealThumb" :alt="mealsDetails.strMeall">
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
                    <p>{{ mealsDetails.strInstructions }}</p>
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
        let { params } = useRoute();
        let mealsDetails = ref(null);

        if (params.id) {
            let meals = getMeals.value;
            mealsDetails.value = meals.find((meal) => meal.idMeal === params.id);
        }

        const getIngredients = (meal) => {
            let ingredients = [];

            for (let i = 1; i <= 20; i++) {
                let ingredientKey = meal[`strIngredient${i}`];
                let measureKey = meal[`strMeasure${i}`];

                if (ingredientKey && measureKey) {
                    let ingredient = `${ingredientKey} (${measureKey})`;
                    ingredients.push(ingredient);
                }
            }
            return ingredients;
        }

        const ingredients = computed(() => {
            if (mealsDetails.value) {
                return getIngredients(mealsDetails.value);
            }
            return [];
        })

        return {
            route: useRoute(),
            mealsDetails,
            ingredients
        }
    }
}
</script>

<style lang="scss">
@import "./style/fullDetails.scss";
</style>
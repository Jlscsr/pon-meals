import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getMeals } from "../../composables/PonMeals";

export default {
  setup() {
    let { params } = useRoute();
    let mealsDetails = ref(null);

    // If a meal ID is provided in the route params, find and display its details.
    if (params.id) {
      let meals = getMeals.value;
      mealsDetails.value = meals.find((meal) => meal.idMeal === params.id);
    }

    /**
     * Returns an array containing the ingredients and their measures for a meal.
     * @param {object} meal - The meal object.
     * @returns An array of strings, each containing an ingredient and its measure.
     */
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
    };

    const ingredients = computed(() => {
      if (mealsDetails.value) {
        return getIngredients(mealsDetails.value);
      }
      return [];
    });

    return {
      route: useRoute(),
      mealsDetails,
      ingredients,
    };
  },
};

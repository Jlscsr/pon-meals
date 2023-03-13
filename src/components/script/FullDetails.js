import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getMeals } from "../../composables/PonMeals";
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

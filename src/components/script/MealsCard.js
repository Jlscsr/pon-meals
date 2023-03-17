import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getMealsByName, getMeals } from "../../composables/PonMeals";

export default {
  setup() {
    // Router
    const route = useRoute();
    const router = useRouter();

    // State
    const pageLoadingState = ref(true);
    const searchedMeals = ref(null);
    const foodName = ref(route.params.name);
    const pageTitle = ref(
      `${foodName.value.charAt(0).toUpperCase()}${foodName.value.substring(1)}`
    );

    /**
     * Asynchronous function to fetch meals by name and set them to the state.
     */
    const searchForMeals = async () => {
      try {
        const response = await getMealsByName(foodName.value);
        if (response.status === 200) {
          searchedMeals.value = getMeals.value;
          pageLoadingState.value = false;
        }
      } catch (error) {
        console.log("Something Went wrong 🫤");
      }
    };

    // Search for meals if foodName is not empty
    if (foodName.value) {
      searchForMeals();
    }

    /**
     * Navigate to full details view by meal ID.
     * @param {string} id - Meal ID
     */
    const seeFullDetails = (id) => {
      if (id) {
        router.push({ name: "full-details", params: { id } });
      }
    };

    return {
      pageLoadingState,
      searchedMeals,
      foodName,
      pageTitle,
      seeFullDetails,
    };
  },
};

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getMealsByName, getMeals } from "../../composables/PonMeals";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const pageLoadingState = ref(true);
    const searchedMeals = ref(null);
    const foodName = ref(route.params.name);
    const pageTitle = ref(
      `${foodName.value.charAt(0).toUpperCase()}${foodName.value.substring(1)}`
    );

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

    if (foodName.value) {
      searchForMeals();
    }

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

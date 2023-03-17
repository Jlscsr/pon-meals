import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    let foodName = ref(null);
    let isInputFocused = ref(true);

    /**
     * Changes the value of isInputFocused to true
     * @function
     */
    const onFocused = () => {
      isInputFocused.value = true;
    };

    /**
     * Navigates to the show-meals route with the food name as a parameter when a user clicks the search button.
     * Changes the value of isInputFocused to false when there is no food name.
     * @function
     * @param {String} food - The name of the food to search
     */
    const searchMeals = (food) => {
      if (food) {
        router.push({ name: "show-meals", params: { name: food } });
      } else {
        isInputFocused.value = false;
      }
    };
    return {
      foodName,
      searchMeals,
      onFocused,
      isInputFocused,
    };
  },
};

import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    let foodName = ref(null);

    let isInputFocused = ref(true);
    const onFocused = () => {
      isInputFocused.value = true;
    };
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

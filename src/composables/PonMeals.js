import { readonly, ref } from "vue";
import axios from "axios";

const baseUrl = "https://www.themealdb.cssom/api/json/v1/1/search.php?s=";
const httpGet = axios.get;

const setMeals = ref(null);
const getMeals = readonly(setMeals);

const getMealsByName = async (name) => {
  try {
    const response = await httpGet(`${baseUrl}${name}`);
    if (response.status === 200) {
      setMeals.value = response.data.meals;
    }
    return response;
  } catch (error) {
    return Promise.reject(error.code);
  }
};

export { getMealsByName, setMeals, getMeals };

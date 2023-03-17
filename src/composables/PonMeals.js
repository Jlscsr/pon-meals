import { readonly, ref } from "vue";
import axios from "axios";

/**
The base URL for the API to search meals by name
@type {string}
*/
const baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

/**
HTTP GET method using axios
@type {function}
*/
const httpGet = axios.get;

/**
A reactive reference to the meals data
@type {object|null}
*/
const setMeals = ref(null);

/**
A readonly reference to the meals data
@type {object|null}
*/
const getMeals = readonly(setMeals);

/**
Fetches meals data by name from the API
@param {string} name - The name of the meal to search for
@returns {Promise} A promise that resolves to the response data
or rejects with an error code
*/
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

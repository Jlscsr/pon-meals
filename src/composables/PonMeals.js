import { readonly, ref } from "vue";
import axios from "axios";

const baseUrl = ref("https://www.themealdb.com/api/json/v1/1/search.php?s=");
const httpGet = axios.get;

let setMeals = ref(null);
let getMeals = readonly(setMeals);

const getMealsByName = (name) => {
  return new Promise((resolve, reject) => {
    httpGet(`${baseUrl.value}${name}`)
      .then((response) => {
        if (response.status === 200) {
          setMeals.value = response.data.meals;
        }
        resolve(response);
      })
      .catch((response) => {
        reject(response.status);
      });
  });
};

export { getMealsByName, setMeals, getMeals };

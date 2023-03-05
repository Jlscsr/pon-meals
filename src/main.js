import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./main.scss";
import App from "./App.vue";

import SearchView from "./components/SearchView.vue";

// setting up the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "search-page",
      component: SearchView,
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("./components/CategoriesView.vue"),
    },
    {
      path: "/countries",
      name: "countries",
      component: () => import("./components/CountriesView.vue"),
    },
  ],
  linkActiveClass: "active-link",
});

createApp(App).use(router).mount("#app");

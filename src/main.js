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
      path: "/pon-meals",
      name: "search-page",
      component: SearchView,
    },
    {
      path: "/show-meals/:name",
      name: "show-meals",
      component: () => import("./components/MealsCard.vue"),
    },
    {
      path: "/full-details/:id",
      name: "full-details",
      component: () => import("./components/FullDetailsView.vue"),
    },
  ],
  linkActiveClass: "active-link",
});

createApp(App).use(router).mount("#app");

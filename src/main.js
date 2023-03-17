/**
This script sets up the Vue app, creates a Vue router and mounts the app to the DOM.
@module main
*/
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./main.scss";
import App from "./App.vue";

import SearchView from "./components/SearchView.vue";

// Create Vue router
const router = createRouter({
  // Sets the router mode to 'history' using createWebHistory
  history: createWebHistory("/pon-meals/"),
  // Set routes
  routes: [
    {
      // Default route
      path: "",
      name: "search-page",
      component: SearchView,
    },
    {
      // Route for displaying meals
      path: "/show-meals/:name",
      name: "show-meals",
      component: () => import("./components/MealsCard.vue"),
    },
    {
      // Route for displaying full details of a meal
      path: "/full-details/:id",
      name: "full-details",
      component: () => import("./components/FullDetailsView.vue"),
    },
  ],
  // Sets the active link class
  linkActiveClass: "active-link",
});

// Create Vue app and mount to DOM
createApp(App).use(router).mount("#app");

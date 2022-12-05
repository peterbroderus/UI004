import { createRouter, createMemoryHistory } from "vue-router";
import LagerView from "@/views/LagerView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: AboutView,
  },
  {
    path: "/lager",
    name: "Lager",
    component: LagerView,
  },
  /*
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" *'/ "../views/AboutView.vue"),
  },
*/
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

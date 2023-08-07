import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/client",
  //   name: "123",
  //   component: () => import("@/views/webControl/client/client.vue"),
  //   meta: {},
  // },
    
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

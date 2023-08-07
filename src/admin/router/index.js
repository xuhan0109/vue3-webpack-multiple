import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import login from "../views/login";


const routes = [
  {
    path: "/",
    name: "login",
    component: login,
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

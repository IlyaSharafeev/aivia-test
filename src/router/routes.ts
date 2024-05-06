import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/game",
    name: "GameBoard",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../views/GameBoard.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

export default routes;

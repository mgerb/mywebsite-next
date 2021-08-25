import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Blog from "../components/Blog.vue";
import Projects from "../components/Projects.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "projects",
    children: [
      {
        path: "projects",
        component: Projects,
      },
      {
        path: "blog",
        component: Blog,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "link--active",
});

export default router;

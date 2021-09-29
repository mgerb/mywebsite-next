import Blog from "@/components/blog/Blog.vue";
import BlogPost from "@/components/blog/BlogPost.vue";
import ProjectDescription from "@/components/projects/ProjectDescription.vue";
import Projects from "@/components/projects/Projects.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
        path: "projects/:projectName",
        component: ProjectDescription,
        beforeEnter: () => {
          window.scrollTo({ top: 0 });
        },
      },
      {
        path: "blog",
        component: Blog,
      },
      {
        path: "blog/:folder/:name",
        alias: "post/:folder/:name", // preserve urls from old site
        component: BlogPost,
        beforeEnter: () => {
          window.scrollTo({ top: 0 });
        },
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

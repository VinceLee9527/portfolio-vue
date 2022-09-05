import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SoulMate from "../views/SoulMate.vue";
import LP from "../views/LP.vue";
import ACT from "../views/Tweet.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/projects/soulmate",
      name: "soulmate",
      component: SoulMate,
    },
    {
      path: "/projects/listeningParty",
      name: "lp",
      component: LP,
    },
    {
      path: "/projects/ACTwitter",
      name: "act",
      component: ACT,
    },
  ],
});

export default router;

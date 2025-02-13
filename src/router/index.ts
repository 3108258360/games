import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "Home",
        key: "/",
      },
    },
    {
      path: "/intro",
      component: () => import("../views/IntroView.vue"),
      meta: {
        title: "Intro",
        key: "/intro",
      },
    },
    {
      path: "/emulator",
      component: () => import("../views/EmulatorView.vue"),
      meta: {
        title: "Emulator",
        key: "/emulator",
      },
    },
    {
      path: "/flash",
      component: () => import("../views/FlashView.vue"),
      meta: {
        title: "Flash Player",
        key: "/flash",
      },
    },
    {
      path: "/fe",
      component: () => import("../views/FireEmblem.vue"),
      meta: {
        title: "Fire Emblem",
        key: "/fe",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;

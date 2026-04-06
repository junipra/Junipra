import { createRouter, createWebHistory } from "vue-router"
import { collectivePage, musicPage, webServicesPage } from "@/content/site-copy"
import BranchPage from "@/pages/BranchPage.vue"
import ContactPage from "@/pages/ContactPage.vue"
import HomePage from "@/pages/HomePage.vue"
import NotFoundPage from "@/pages/NotFoundPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/web-services",
      name: "web-services",
      component: BranchPage,
      props: { page: webServicesPage },
    },
    {
      path: "/collective",
      name: "collective",
      component: BranchPage,
      props: { page: collectivePage },
    },
    {
      path: "/music",
      name: "music",
      component: BranchPage,
      props: { page: musicPage },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 112,
        behavior: "smooth",
      }
    }

    return {
      top: 0,
      behavior: "smooth",
    }
  },
})

export default router

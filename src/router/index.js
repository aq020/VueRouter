import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import My from "../pages/My"
import NotFound from "../pages/NotFound"
import Learn from "../pages/Learn"
import Java from "../pages/Learn/Subpage/java"
import Web from "../pages/Learn/Subpage/web"


Vue.use(VueRouter)

export default new VueRouter({
  // mode:'history',
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/shop/:id",
      name: "Shop",
      props: true,
      component: Shop
    },
    {
      path: "*",
      component: NotFound
    },
    {
      path: "/learn",
      component: Learn,
      redirect: "/learn/java",
      children: [
        {
          path: "java",
          component: Java,
          alias:'javaweb'
        },
        {
          path: "web",
          component: Web
        }
      ]
    },
    {
      path: "/my",
      component: My
    }
  ]
})

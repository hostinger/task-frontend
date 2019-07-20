import Vue from 'vue'
import Router from 'vue-router'
import BannerPage from "./views/BannerPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: BannerPage
    }
  ]

})

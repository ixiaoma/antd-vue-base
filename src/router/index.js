import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap, asyncRouterMap } from './routers'

Vue.use(Router)

const router = new Router({
  routes: [constantRouterMap, asyncRouterMap]
  // mode: 'history'
})

// const whiteList = ['login']//白名单列表

router.beforeEach(async (to, from, next) => {
  // if(whiteList.includes(to.name)){

  // }
  next()
})

router.afterEach(to => {

})

export default router

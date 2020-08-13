import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import { constantRouterMap, asyncRouterMap, hideInMenuRouterMap } from './routers'

Vue.use(Router)

const router = new Router({
  routes: [constantRouterMap, asyncRouterMap, hideInMenuRouterMap]
  // mode: 'history'
})

const whiteList = ['login', 'register']// 白名单列表

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = sessionStorage.getItem('ACCESS_TOKEN')
  if (token) {
    if (to.name === 'login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ name: 'login' })
      NProgress.done()
    }
  }
})

router.afterEach(to => {
  NProgress.done()
})

export default router

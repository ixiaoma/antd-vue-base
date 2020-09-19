import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import { constantRouterMap,  hideInMenuRouterMap } from './routers'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [constantRouterMap,  hideInMenuRouterMap]
  // mode: 'history'
})
let flag = false
const whiteList = ['login', 'register','resetPass']// 白名单列表

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const token = sessionStorage.getItem('ACCESS_TOKEN')
  if (token) {
    if (to.name === 'login') {
      next('/')
    } else {
      if(!flag){
        const asyncRouterMap = await store.dispatch('menuListLoad')
        router.options.routes.push(asyncRouterMap)
        router.addRoutes(asyncRouterMap)
        flag = true
        const redirect = decodeURIComponent(from.query.redirect || to.path)
        if (to.path === redirect) {
          next({ ...to, replace: true })
        } else {
          // 跳转到目的路由
          next({ path: redirect })
        }
      }else{
        next()
      }
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

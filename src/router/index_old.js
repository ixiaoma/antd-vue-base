import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import { constantRouterMap, asyncRouterMap, hideInMenuRouterMap } from './routers'
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { data } from './routerjson.js'
import { navRouterArr } from './routerObj.js'
import { normalizeTrim } from 'upath';


Vue.use(Router)

const router = new Router({
  routes: [constantRouterMap, hideInMenuRouterMap]
  // mode: 'history'
})
let flag = false
const whiteList = ['login', 'register']// 白名单列表

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = sessionStorage.getItem('ACCESS_TOKEN')
  if (token) {
    if (to.name === 'login') {
      next('/')
    } else {
      if (!flag) {
        let childrenNav = []
        let menuArr = listToTree(data[0]['childList'], childrenNav)
        let asyncRouterMap2 = asyncRouterMap
        asyncRouterMap2['children'] = menuArr
        router.options.routes.push(asyncRouterMap2)
        router.addRoutes([asyncRouterMap2])
        flag = true
        const redirect = decodeURIComponent(from.query.redirect || to.path)
        if (to.path === redirect) {
          next({ ...to, replace: true })
        } else {
          // 跳转到目的路由
          next({ path: redirect })
        }
      } else {
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

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}
let listToTree = (List, menuList) => {
  List && List.length && List.forEach(item => {
    let obj = {};
    let sub = {};
    let subList = [];
    if (item['childList'].length == 0) {
      obj = {
        path: navRouterArr[item.url].path,
        name: item.url,
        meta: { title: item.name, icon: item.icon || 'table' },
        component: navRouterArr[item.url].component,
        children: []
      };
      navRouterArr[item.url].path && menuList.push(obj);
    } else {
      let _child = item['childList'];
      for (var ii = 0; ii < _child.length; ii++) {
        sub = {
          path: navRouterArr[_child[ii].url].path,
          meta: { title: _child[ii].name },
          name: _child[ii].url,
          component: navRouterArr[_child[ii].url].component
        }
        if (_child[ii].url) {
          subList.push(sub);
        }
      }
      obj = {
        path: '/' + item.url,
        name: item.url,
        meta: { title: item.name, icon: item.icon || 'table' },
        component: RouteView,
        children: subList
      };
      // obj = {
      //   path: navRouterArr[item.url].path,
      //   name: item.url,
      //   meta: {title: item.name, icon: item.icon||'table'},
      //   redirect:navRouterArr[item.url].redirect,
      //   component: RouteView,
      //   children: subList
      // };
      // navRouterArr[item.url].path && menuList.push(obj);
      item.url && menuList.push(obj);
    }
  })
  return menuList
}

export default router

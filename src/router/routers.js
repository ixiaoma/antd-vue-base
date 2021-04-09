// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/qqmap',
    children: [
      {
        path: '/dashboard/qqmap',
        name: 'qqmap',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: '大屏', icon: 'table'}
      },
      {
        path: '/dashboard/analysis',
        name: 'Analysis',
        component: () => import('@/views/dashboard/Analysis'),
        meta: { title: '区域', icon: 'table'}
      },
      {
        path: '/dashboard/regionDashboard',
        name: 'regionDashboard',
        component: () => import('@/views/dashboard/RegionDashboard'),
        meta: { title: '门店', icon: 'table'}
      },
      {
        path: '/dashboard/RegionInfo',
        name: 'regionInfo',
        component: () => import('@/views/dashboard/RegionInfo'),
        meta: { title: 'dashboard', icon: 'table'}
      },
      {
        path: '/list/table-list',
        name: 'TableListWrapper',
        component: () => import('@/views/list/TableList'),
        meta: { title: '品牌上架率', icon: 'table'}
      },
      {
        path: '/dashboard/StoreInfo',
        name: 'storeInfo',
        component: () => import('@/views/list/StoreList'),
        meta: { title: '门店指标', icon: 'table'}
      },
      {
        path: '/system',
        name: 'system',
        component: RouteView,
        redirect: '/system/sysAccountManage',
        meta: { title: '系统管理', icon: 'table'},
        children: [
          {
            path: '/system/sysAccountManage',
            name: 'sysAccountManage',
            component: () => import('@/views/sysAccountManage/sysAccountManage.vue'),
            meta: { title: '用户管理'}
          },{
            path: '/system/roleManage',
            name: 'roleManage',
            component: () => import('@/views/roleManage/roleManage.vue'),
            meta: { title: '角色管理'}
          },{
            path: '/system/menuManage',
            name: 'menuManage',
            component: () => import('@/views/menuManage/menuManage.vue'),
            meta: { title: '菜单管理'}
          }
          // ,{
          //   path: '/system/tableCategory',
          //   name: 'tableCategory',
          //   component: () => import('@/views/tableCategory/tableCategory.vue'),
          //   meta: { title: '码表管理'}
          // }
        ]
      }
    ]
}

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },{
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },{
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },{
        path: 'recover',
        name: 'recover',
        component: undefined
      },
      {
        path: '/user/resetPass',
        name: 'resetPass',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/resetPass.vue')
      },
    ]
}

export const hideInMenuRouterMap = {
  path: '/hidemenu',
  component:BlankLayout,
  redirect: '/hidemenu/baseForm',
  hidden: true,
  children:[
    // {
    //   path: '/hidemenu/userCenter',
    //   name: 'userCenter',
    //   component: () => import('@/views/account/userCenter/userCenter.vue'),
    //   meta: { title: '个人中心'}
    // }
  ]
}

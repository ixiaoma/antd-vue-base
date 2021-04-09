"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideInMenuRouterMap = exports.constantRouterMap = exports.asyncRouterMap = void 0;

var _layouts = require("@/layouts");

var _icons = require("@/core/icons");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RouteView = {
  name: 'RouteView',
  render: function render(h) {
    return h('router-view');
  }
};
var asyncRouterMap = {
  path: '/',
  name: 'index',
  component: _layouts.BasicLayout,
  meta: {
    title: 'menu.home'
  },
  redirect: '/dashboard/analysis',
  children: [{
    path: '/dashboard/qqmap',
    name: 'qqmap',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/dashboard/Workplace'));
      });
    },
    meta: {
      title: '大屏',
      icon: 'table'
    }
  }, {
    path: '/dashboard/analysis',
    name: 'Analysis',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/dashboard/Analysis'));
      });
    },
    meta: {
      title: '区域',
      icon: 'table'
    }
  }, {
    path: '/dashboard/regionDashboard',
    name: 'regionDashboard',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/dashboard/RegionDashboard'));
      });
    },
    meta: {
      title: '门店',
      icon: 'table'
    }
  }, {
    path: '/dashboard/RegionInfo',
    name: 'regionInfo',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/dashboard/RegionInfo'));
      });
    },
    meta: {
      title: 'dashboard',
      icon: 'table'
    }
  }, {
    path: '/list/table-list',
    name: 'TableListWrapper',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/list/TableList'));
      });
    },
    meta: {
      title: '品牌上架率',
      icon: 'table'
    }
  }, {
    path: '/dashboard/StoreInfo',
    name: 'storeInfo',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/list/StoreList'));
      });
    },
    meta: {
      title: '门店指标',
      icon: 'table'
    }
  }, {
    path: '/system',
    name: 'system',
    component: RouteView,
    redirect: '/system/sysAccountManage',
    meta: {
      title: '系统管理',
      icon: 'table'
    },
    children: [{
      path: '/system/sysAccountManage',
      name: 'sysAccountManage',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/sysAccountManage/sysAccountManage.vue'));
        });
      },
      meta: {
        title: '用户管理'
      }
    }, {
      path: '/system/roleManage',
      name: 'roleManage',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/roleManage/roleManage.vue'));
        });
      },
      meta: {
        title: '角色管理'
      }
    }, {
      path: '/system/menuManage',
      name: 'menuManage',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/menuManage/menuManage.vue'));
        });
      },
      meta: {
        title: '菜单管理'
      }
    } // ,{
    //   path: '/system/tableCategory',
    //   name: 'tableCategory',
    //   component: () => import('@/views/tableCategory/tableCategory.vue'),
    //   meta: { title: '码表管理'}
    // }
    ]
  }]
};
/**
 * 基础路由
 * @type { *[] }
 */

exports.asyncRouterMap = asyncRouterMap;
var constantRouterMap = {
  path: '/user',
  component: _layouts.UserLayout,
  redirect: '/user/login',
  hidden: true,
  children: [{
    path: 'login',
    name: 'login',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/user/Login'));
      });
    }
  }, {
    path: 'register',
    name: 'register',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/user/Register'));
      });
    }
  }, {
    path: 'register-result',
    name: 'registerResult',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/user/RegisterResult'));
      });
    }
  }, {
    path: 'recover',
    name: 'recover',
    component: undefined
  }, {
    path: '/user/resetPass',
    name: 'resetPass',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/user/resetPass.vue'));
      });
    }
  }]
};
exports.constantRouterMap = constantRouterMap;
var hideInMenuRouterMap = {
  path: '/hidemenu',
  component: _layouts.BlankLayout,
  redirect: '/hidemenu/baseForm',
  hidden: true,
  children: [// {
    //   path: '/hidemenu/userCenter',
    //   name: 'userCenter',
    //   component: () => import('@/views/account/userCenter/userCenter.vue'),
    //   meta: { title: '个人中心'}
    // }
  ]
};
exports.hideInMenuRouterMap = hideInMenuRouterMap;
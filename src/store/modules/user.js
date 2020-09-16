import { login, getInfo, logout,navMenu } from '@/api/user'
import { navRouterArr,RouteView } from './routerObj.js'
import { welcome } from '@/utils/util'

const user = {
  state: {
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {},
    menuList:[]
  },

  mutations: {
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_MENU: (state, menuList) => {
      state.menuList = menuList
    },
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          console.log(response)
          const result = response.result

          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => { return action.action })
                per.actionList = action
              }
            })
            role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }

          commit('SET_NAME', { name: result.name, welcome: welcome() })
          commit('SET_AVATAR', result.avatar)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
          sessionStorage.removeItem('ACCESS_TOKEN')
          commit('SET_ROLES', [])
        })
      })
    },

    //系统菜单
    menuListLoad ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        navMenu().then(response => {
          const result = response


          let menuList=[]
          let List=response[0]['childList']
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
              item.url && menuList.push(obj);
            }
          })






          commit('SET_MENU', menuList)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user

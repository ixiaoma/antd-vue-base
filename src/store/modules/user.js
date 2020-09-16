import { login, getInfo, logout,navMenu } from '@/api/user'
import { getRouterData } from '@/utils/routerSetting'
import { welcome } from '@/utils/util'
import router from '../../router'

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
      return new Promise((resolve) => {
        navMenu().then(response => {
          const menu = getRouterData(response)
          commit('SET_MENU', menu[0].children)
          resolve(menu)
        })
      })
    }
  }
}

export default user

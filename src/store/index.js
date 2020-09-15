import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import approval from './modules/approval'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    approval
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})

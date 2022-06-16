import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

Vue.use(Vuex)

export type State = {
  [key: string]: any
}

const state: State = {
  userInfo: {},
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
})

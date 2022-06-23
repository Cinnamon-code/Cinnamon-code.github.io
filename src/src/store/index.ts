import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import { Article } from '@/models'

Vue.use(Vuex)

export type State = {
  articles: Partial<Article>[]

}

const state: State = {
  articles: [] as Article[],
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
})

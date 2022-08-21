import Vue from 'vue'
import Vuex from 'vuex'
import contents from '@/store/contents'
import user from '@/store/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contents,
    user
  }
})

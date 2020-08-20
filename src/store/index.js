import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import page from './modules/page'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    page
  },
  getters
})

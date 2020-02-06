import {
  UPDATE_COMPONENTS,
  UPDATE_CURRENT_COMPONENTS,
  UPDATE_PREV_COMPONENTS
} from '../mutation_types'

const state = {
  components: [],
  currentComponent: null,
  prevComponent: null,
  copiedComponents: [],
  backupComponents: []
}

const getters = {}

const mutations = {
  [UPDATE_COMPONENTS] (state, payload) {
    state.components = payload
  },
  [UPDATE_CURRENT_COMPONENTS] (state, payload) {
    state.currentComponent = payload
  },
  [UPDATE_PREV_COMPONENTS] (state, payload) {
    state.prevComponent = payload
  }
}

const actions = {
  updateComponents ({ commit }, payload) {
    commit(UPDATE_COMPONENTS, payload)
  },
  updateCurrentComponent ({ commit }, payload) {
    commit(UPDATE_CURRENT_COMPONENTS, payload)
  },
  updatePrevComponent ({ commit }, payload) {
    commit(UPDATE_PREV_COMPONENTS, payload)
  }
}

export default {
  namespaced: true,
  state,  
  getters,
  mutations,
  actions
}

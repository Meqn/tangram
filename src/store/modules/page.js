
const state = {
  components: [],
  currentComponent: null,
  prevComponent: null,
  copiedComponents: [],
  backupComponents: []
}

const getters = {}

const mutations = {
  SET_COMPONENTS (state, payload) {
    state.components = payload
  },
  SET_CURRENT_COMPONENTS (state, payload) {
    state.currentComponent = payload
  },
  SET_PREV_COMPONENTS (state, payload) {
    state.prevComponent = payload
  },
  SET_TEMPLATE_CONFIG (state, payload) {
    state.templateConfig = payload
  },
  SET_SCREEN_THEME (state, payload) {
    state.screenTheme = payload
  }
}

const actions = {
  updateComponents ({ commit }, payload) {
    commit('SET_COMPONENTS', payload)
  },
  updateCurrentComponent ({ commit }, payload) {
    commit('SET_CURRENT_COMPONENTS', payload)
  },
  updatePrevComponent ({ commit }, payload) {
    commit('SET_PREV_COMPONENTS', payload)
  },
  updateTheme ({ state, commit }, payload) {
    const theme = payload || (state.screenTheme === 'light' ? 'dark' : 'light')
    commit('SET_SCREEN_THEME', theme)
  },
  updateTemplateConfig({ commit }, payload) {
    commit('SET_TEMPLATE_CONFIG', payload)
  }
}

export default {
  namespaced: true,
  state,  
  getters,
  mutations,
  actions
}

export const namespaced = true

export const state = {
  token: null,
  id: null,
  username: null,
  role: null
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_DATA(state, user) {
    state.id = user.id,
    state.username = user.name,
    state.role = user.role
  },
  LOG_OUT(state) {
    state.token = null,
    state.id = null,
    state.username = null,
    state.role = null    
  }
}

export const actions = {
  logIn({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  getData({ commit }, user) {
    commit('SET_DATA', user)
  },
  logout({ commit }) {
    commit('LOG_OUT')
  }
}
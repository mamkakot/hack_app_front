import EventService from '@/services/EventService'
import axios from 'axios'

export const namespaced = true

export const state = {
  user: null
}

export const mutations = {
  SET_USER(state, userData) {
    state.user = userData;
    localStorage.setItem('user', JSON.stringify(userData))
    axios.defaults.headers.common['Authorization'] = `Bearer ${
      userData
    }`
  },
  LOG_OUT(state) {
    state.token = null
  }
}

export const actions = {
  logIn({ commit }, credentials) {
    EventService.logIn(credentials)
    .then(({ data }) => {
      commit('SET_USER', data)
    })
    .catch((error) => {
      console.log("There was an error: ", error);
    });
  },
  logout({ commit }) {
    commit('LOG_OUT')
  }
}
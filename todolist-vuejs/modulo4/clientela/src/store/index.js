import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      text: "",      
      color: "info"
    }
  },
  mutations: {
    showSnackbar(state, payload) {
      state.snackbar.show = true,
      state.snackbar.text = payload.text,
      state.snackbar.color = payload.color      
    },
    closeSnackbar(state) {
      state.snackbar.show = false
    }
  },
  actions: {
    showSuccessSnackbar({ commit }, message) {
      commit('showSnackbar', {text: message, color: 'success'})
      setTimeout(() => {
        commit('closeSnackbar')
      }, 5000);
    },
    closeSnackbar({commit}) {
      commit('closeSnackbar')
    }
  },
  modules: {
  }
})

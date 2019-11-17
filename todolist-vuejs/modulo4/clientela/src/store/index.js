import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      text: "",
      timeout: 3000,
      color: "info"
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

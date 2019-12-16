import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputValueVuex: 'cumelmell'
  },
  mutations: {
    changeInputValue (state, payload) {
      state.inputValueVuex = payload
    }
  }
})

export default store

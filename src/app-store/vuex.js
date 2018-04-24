import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: {
      active: false,
      timer: null
    },
    user: {
      correct: false,
      info: {
        userid: '',
        userprop: 0
      }
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store

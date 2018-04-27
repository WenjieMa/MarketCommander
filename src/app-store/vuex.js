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
        userprop: 0,
        name: ''
      }
    },
    menu: {
      nav: null,
      side: null
    }
  },
  mutations: {
    // 选择导航栏菜单
    selectMenu(state, str = 'null|null') {
      const arr = str.split('|');
      state.menu = {
        nav: arr[0] || 'null',
        side: arr[1] || 'null'
      };
    }
  },
  actions: {
    selectMenu({ commit }, str) {
      commit('selectMenu', str);
    }
  }
})

export default store

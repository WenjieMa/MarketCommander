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
        userid: '1',
        name: '测试管理员'
      },
      roleTree: {

      }
    },
    menu: {
      nav: null,
      side: null
    },
    routeList: [],
    activeIndex: ''
  },
  mutations: {
    // 选择导航栏菜单
    selectMenu(state, str = 'null|null') {
      const arr = str.split('|');
      state.menu = {
        nav: arr[0] || 'null',
        side: arr[1] || 'null'
      };
    },
    changeRoute(state, routeList) {
      state.routeList = routeList;
    },
    show(state, s) {
      clearTimeout(state.loading.timer);
      state.loading.active = true;
      if (s) {
        setTimeout(() => {
          state.loading.active = false;
        }, s * 1000);
      }
    },
    hide(state) {
      state.loading.active = false;
    }
  },
  actions: {
    selectMenu({
      commit
    }, str) {
      commit('selectMenu', str);
    },
    changeRoute({
      commit
    }, routeList) {
      commit('changeRoute', routeList);
    }
  }
})

export default store

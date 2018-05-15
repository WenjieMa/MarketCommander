import components from './all-component'
import util from './mixins/util'
import store from './vuex'
const utilsOption = {
  install(Vue, opts = {}) {
    Vue.mixin({
      computed: util.computed,
      methods: util.methods
    });
    // 将所有全局组件在这里注册
    components.forEach(function (component, index) {
      Vue.component(component.name, component);
    });
    Vue.prototype.$loading = {
      active: store.state.active,
      show(s) {
        store.commit('show', s);
      },
      hide() {
        store.commit('hide');
      }
    };
  }
};

export default utilsOption

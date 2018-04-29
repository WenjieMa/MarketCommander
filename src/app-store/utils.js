import store from './vuex'
import components from './all-component'
const utilsOption = {
  install(Vue, opts = {}) {
    Vue.mixin({
      computed: {
        utils() {
          return store.state;
        }
      },
      methods: {
        isNull(obj) {
          if (typeof obj === 'undefined' || obj === null || obj === '') {
            return true;
          }
          return false;
        }
      }
    });
    // 将所有全局组件在这里注册
    components.forEach(function (component, index) {
      Vue.component(component.name, component);
    });
  }
};

export default utilsOption

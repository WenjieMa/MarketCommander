import components from './all-component'
import util from './mixins/util'

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
  }
};

export default utilsOption

import Vue from 'vue'
import router from './router'
import store from './app-store/vuex'
import components from './app-store/all-component'
import main from './main.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)

// 将所有全局组件在这里注册
components.forEach(function (component, index) {
  Vue.component(component.name, component);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(main)
})

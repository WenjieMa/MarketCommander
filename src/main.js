import Vue from 'vue'
import router from './router'
import store from './app-store/vuex'
import main from './main.vue'
import ElementUI from 'element-ui'
import utilsOption from './app-store/utils'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(utilsOption)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(main)
})

import Vue from 'vue'
import router from './router'
import store from './app/vuex'
import main from './main.vue'
import ElementUI from 'element-ui'
import utilsOption from './app/utils'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/app/axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(utilsOption)
Vue.use(axios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(main)
})

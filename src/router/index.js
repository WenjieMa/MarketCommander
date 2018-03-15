import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: require('@/components/Login')
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: require('@/components/Regist')
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: require('@/components/MainPage')
    }
  ]
})

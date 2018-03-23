import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/pages/Login'], resolve),
      beforeEnter: (to, from, next) => {
        console.log(`独享守卫：从${from}跳转至${to}成功`)
      }
    },
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['@/pages/Login'], resolve)
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: resolve => require(['@/pages/Regist'], resolve)
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: resolve => require(['@/pages/MainPage'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`正在从${from}跳转至${to}`)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const judge = false
    if (judge) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

router.afterEach((to, from) => {
  console.log(`从${from}跳转至${to}成功`)
})

export default router

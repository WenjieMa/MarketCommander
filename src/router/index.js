import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login'], resolve),
      beforeEnter: (to, from, next) => {
        console.log(`独享守卫：从${from}跳转至${to}成功`)
      }
    },
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/regist',
      name: 'regist',
      component: resolve => require(['@/pages/regist'], resolve)
    },
    {
      path: '/main-page',
      name: 'main-page',
      component: resolve => require(['@/pages/main-page'], resolve)
    },
    {
      path: '/forget-psw',
      name: 'forget-psw',
      component: resolve => require(['@/pages/forget-psw'], resolve)
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

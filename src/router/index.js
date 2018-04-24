import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: 'login'
    }, {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/basic/login'], resolve)
    },
    {
      path: '/regist',
      name: 'regist',
      component: resolve => require(['@/pages/basic/regist'], resolve)
    },
    {
      path: '/forget-psw',
      name: 'forget-psw',
      component: resolve => require(['@/pages/basic/forget-psw'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/home'], resolve),
      children: [{
          path: '/item',
          name: 'item',
          component: resolve => require(['@/pages/item/item'], resolve),
          children: [{
            path: '/list',
            name: 'item-list',
            component: resolve => require(['@/pages/item/item-edit'], resolve)
          }, {
            path: '/edit',
            name: 'item-edit',
            component: resolve => require(['@/pages/item/item-edit'], resolve)
          }, {
            path: '/add',
            name: 'item-add',
            component: resolve => require(['@/pages/item/item-add'], resolve)
          }]
        },
        {
          path: '/assistant',
          name: 'assistant',
          component: resolve => require(['@/pages/assistant/assistant'], resolve),
          children: [{
            path: '/list',
            name: 'user-list',
            component: resolve => require(['@/pages/assistant/user-list'], resolve)
          }, {
            path: '/edit',
            name: 'user-edit',
            component: resolve => require(['@/pages/assistant/user-edit'], resolve)
          }, {
            path: '/add',
            name: 'user-add',
            component: resolve => require(['@/pages/assistant/user-add'], resolve)
          }]
        },
        {
          path: '/operator',
          name: 'operator',
          component: resolve => require(['@/pages/operator/operator'], resolve),
          children: [{
            path: '/list',
            name: 'assistant-list',
            component: resolve => require(['@/pages/operator/assistant-list'], resolve)
          }, {
            path: '/edit',
            name: 'assistant-edit',
            component: resolve => require(['@/pages/operator/assistant-edit'], resolve)
          }, {
            path: '/add',
            name: 'assistant-add',
            component: resolve => require(['@/pages/operator/assistant-add'], resolve)
          }]
        },
        {
          path: '/role',
          name: 'role',
          component: resolve => require(['@/pages/role/role'], resolve),
          children: [{
            path: '/role2assistant',
            name: 'role2assistant',
            component: resolve => require(['@/pages/role/role2assistant'], resolve)
          }, {
            path: '/list',
            name: 'role-list',
            component: resolve => require(['@/pages/role/role-list'], resolve)
          }, {
            path: '/edit',
            name: 'role-edit',
            component: resolve => require(['@/pages/role/role-edit'], resolve)
          }, {
            path: '/add',
            name: 'role-add',
            component: resolve => require(['@/pages/role/role-add'], resolve)
          }]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to' + to);
  console.log('from' + from);
  console.log('next' + next);
  console.log(`正在从${from}跳转至${to}`)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var judge = false
    if (this.$store.state.user.correct) {
      judge = true;
    }
    if (!judge) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
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

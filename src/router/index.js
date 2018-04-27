import Vue from 'vue'
import Router from 'vue-router'
import {
  stringify
} from 'querystring';

Vue.use(Router)

const userrouter = {
  path: '/user/home',
  name: 'user-home',
  component: resolve => require(['@/pages/user/home'], resolve)
}

const systemrouter = {
  path: '/system/home',
  name: 'system-home',
  component: resolve => require(['@/pages/system/home'], resolve),
  children: [{
      path: '/system/el-template',
      name: 'el-template',
      component: resolve => require(['@/pages/el-template'], resolve)
    },
    {
      path: '/system/communication',
      name: 'system-communication',
      component: resolve => require(['@/pages/system/communication/communication'], resolve),
      children: [{
          path: '/system/communication/chat',
          name: 'system-chat',
          component: resolve => require(['@/pages/system/communication/chat'], resolve)
        },
        {
          path: '/system/communication/comment-reply',
          name: 'system-comment-reply',
          component: resolve => require(['@/pages/system/communication/comment-reply'], resolve)
        }
      ]
    },
    {
      path: '/system/item',
      name: 'system-item',
      component: resolve => require(['@/pages/system/item/item'], resolve),
      children: [{
          path: '/system/item/list',
          name: 'item-list',
          component: resolve => require(['@/pages/system/item/item-list'], resolve)
        },
        {
          path: '/system/item/edit',
          name: 'item-edit',
          component: resolve => require(['@/pages/system/item/item-edit'], resolve)
        }
      ]
    },
    {
      path: '/system/assistant',
      name: 'assistant',
      component: resolve => require(['@/pages/system/assistant/assistant'], resolve),
      children: [{
          path: '/system/assistant/list',
          name: 'assistant-user-list',
          component: resolve => require(['@/pages/system/assistant/user-list'], resolve)
        },
        {
          path: '/system/assistant/edit',
          name: 'assistant-user-edit',
          component: resolve => require(['@/pages/system/assistant/user-edit'], resolve)
        }
      ]
    },
    {
      path: '/system/operator',
      name: 'operator',
      component: resolve => require(['@/pages/system/operator/operator'], resolve),
      children: [{
        path: '/system/operator/list',
        name: 'operator-assistant-list',
        component: resolve => require(['@/pages/system/operator/assistant-list'], resolve)
      }, {
        path: '/system/operator/edit',
        name: 'operator-assistant-edit',
        component: resolve => require(['@/pages/system/operator/assistant-edit'], resolve)
      }]
    },
    {
      path: '/system/role',
      name: 'role',
      component: resolve => require(['@/pages/system/role/role'], resolve),
      children: [{
          path: '/system/role/list',
          name: 'role-list',
          component: resolve => require(['@/pages/system/role/role-list'], resolve)
        },
        {
          path: '/system/role/edit',
          name: 'role-edit',
          component: resolve => require(['@/pages/system/role/role-edit'], resolve)
        },
        {
          path: '/system/role2assistant',
          name: 'role2assistant',
          component: resolve => require(['@/pages/system/role/role2assistant'], resolve)
        }
      ]
    }
  ]
}

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/system/login'
    }, {
      path: '/user',
      name: 'user',
      component: resolve => require(['@/pages/user'], resolve),
      children: [{
          path: '/user/login',
          name: 'user-login',
          component: resolve => require(['@/pages/user/basic/login'], resolve)
        },
        {
          path: '/user/regist',
          name: 'user-regist',
          component: resolve => require(['@/pages/user/basic/regist'], resolve)
        },
        {
          path: '/user/forget-psw',
          name: 'user-forget-psw',
          component: resolve => require(['@/pages/user/basic/forget-psw'], resolve)
        },
        userrouter
      ]
    },
    {
      path: '/system',
      name: 'system',
      component: resolve => require(['@/pages/system'], resolve),
      children: [{
          path: '/system/login',
          name: 'system-login',
          component: resolve => require(['@/pages/system/basic/login'], resolve)
        },
        {
          path: '/system/regist',
          name: 'system-regist',
          component: resolve => require(['@/pages/system/basic/regist'], resolve)
        },
        {
          path: '/system/forget-psw',
          name: 'system-forget-psw',
          component: resolve => require(['@/pages/system/basic/forget-psw'], resolve)
        },
        systemrouter
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to:' + stringify(to));
  console.log('from:' + stringify(from));
  console.log('next:' + stringify(next));
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

const assistantRoute = {
  path: '/system/assistant',
  name: 'assistant',
  component: resolve => require(['@/pages/system/assistant/assistant'], resolve),
  children: [{
      path: '/system/assistant/list',
      name: 'user-list',
      meta: {
        menu: 'assistant|user-list',
        name: '用户列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/assistant/user-list'], resolve)
    },
    {
      path: '/system/assistant/detail',
      name: 'user-detail',
      meta: {
        menu: 'assistant|user-detail',
        name: '用户详情',
        index: 3
      },
      component: resolve => require(['@/pages/system/assistant/user-deatil'], resolve)
    }
  ]
}
export default assistantRoute

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
      path: '/system/assistant/edit',
      name: 'user-edit',
      meta: {
        menu: 'assistant|user-edit',
        name: '用户编辑',
        index: 2
      },
      component: resolve => require(['@/pages/system/assistant/user-edit'], resolve)
    }
  ]
}
export default assistantRoute

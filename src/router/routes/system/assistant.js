const assistantRoute = {
  path: '/system/assistant',
  name: 'assistant',
  component: resolve => require(['@/pages/system/assistant/assistant'], resolve),
  children: [{
      path: '/system/assistant/list',
      name: 'assistant-user-list',
      meta: {
        menu: 'assistant|list'
      },
      component: resolve => require(['@/pages/system/assistant/user-list'], resolve)
    },
    {
      path: '/system/assistant/edit',
      name: 'assistant-user-edit',
      meta: {
        menu: 'assistant|edit'
      },
      component: resolve => require(['@/pages/system/assistant/user-edit'], resolve)
    }
  ]
}
export default assistantRoute

const operatorRoute = {
  path: '/system/operator',
  name: 'operator',
  component: resolve => require(['@/pages/system/operator/operator'], resolve),
  children: [{
      path: '/system/operator/assistant-list',
      name: 'assistant-list',
      meta: {
        menu: 'operator|assistant-list',
        name: '管理员列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/operator/assistant-list'], resolve)
    },
    {
      path: '/system/operator/assistant-detail',
      name: 'assistant-deatail',
      meta: {
        menu: 'operator|assistant-list',
        name: '管理员信息详情',
        index: 2
      },
      component: resolve => require(['@/pages/system/operator/assistant-detail'], resolve)
    },
    {
      path: '/system/operator/assistant-edit',
      name: 'assistant-edit',
      meta: {
        menu: 'operator|assistant-list',
        name: '编辑管理员信息',
        index: 3
      },
      component: resolve => require(['@/pages/system/operator/assistant-edit'], resolve)
    },
    {
      path: '/system/operator/role/role-list',
      name: 'role-list',
      meta: {
        menu: 'operator|role-list',
        name: '权限列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/operator/role/role-list'], resolve)
    },
    {
      path: '/system/operator/role/role-edit',
      name: 'role-edit',
      meta: {
        menu: 'operator|role-list',
        name: '权限编辑',
        index: 3
      },
      component: resolve => require(['@/pages/system/operator/role/role-edit'], resolve)
    },
    {
      path: '/system/operator/role/role2assistant',
      name: 'role2assistant',
      meta: {
        menu: 'operator|role-list',
        name: '权限赋予',
        index: 4
      },
      component: resolve => require(['@/pages/system/operator/role/role2assistant'], resolve)
    }
  ]
}
export default operatorRoute

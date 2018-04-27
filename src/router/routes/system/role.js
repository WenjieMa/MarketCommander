const roleRoute = {
  path: '/system/role',
  name: 'role',
  component: resolve => require(['@/pages/system/role/role'], resolve),
  children: [{
      path: '/system/role/list',
      name: 'role-list',
      meta: {
        menu: 'role|role-list',
        name: '权限列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/role/role-list'], resolve)
    },
    {
      path: '/system/role/edit',
      name: 'role-edit',
      meta: {
        menu: 'role|role-edit',
        name: '权限编辑',
        index: 2
      },
      component: resolve => require(['@/pages/system/role/role-edit'], resolve)
    },
    {
      path: '/system/role2assistant',
      name: 'role2assistant',
      meta: {
        menu: 'role|role2assistant',
        name: '权限赋予',
        index: 2
      },
      component: resolve => require(['@/pages/system/role/role2assistant'], resolve)
    }
  ]
}
export default roleRoute

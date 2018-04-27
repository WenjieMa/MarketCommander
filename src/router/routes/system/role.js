const roleRoute = {
  path: '/system/role',
  name: 'role',
  component: resolve => require(['@/pages/system/role/role'], resolve),
  children: [{
      path: '/system/role/list',
      name: 'role-list',
      meta: {
        menu: 'role|list'
      },
      component: resolve => require(['@/pages/system/role/role-list'], resolve)
    },
    {
      path: '/system/role/edit',
      name: 'role-edit',
      meta: {
        menu: 'role|edit'
      },
      component: resolve => require(['@/pages/system/role/role-edit'], resolve)
    },
    {
      path: '/system/role2assistant',
      name: 'role2assistant',
      meta: {
        menu: 'role|role2assistant'
      },
      component: resolve => require(['@/pages/system/role/role2assistant'], resolve)
    }
  ]
}
export default roleRoute

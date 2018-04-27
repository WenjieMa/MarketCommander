const systeminfoRoute = {
  path: '/system/systeminfo',
  name: 'system-systeminfo',
  component: resolve => require(['@/pages/system/systeminfo/systeminfo'], resolve),
  children: [
    {
      path: '/system/systeminfo/district/list',
      name: 'district-list',
      meta: {
        menu: 'systeminfo|district-list'
      },
      component: resolve => require(['@/pages/system/systeminfo/district/district-list'], resolve)
    },
    {
      path: '/system/systeminfo/district/edit',
      name: 'district-edit',
      meta: {
        menu: 'systeminfo|district-edit'
      },
      component: resolve => require(['@/pages/system/systeminfo/district/district-edit'], resolve)
    },
    {
      path: '/system/systeminfo/express/list',
      name: 'express-list',
      meta: {
        menu: 'systeminfo|express-list'
      },
      component: resolve => require(['@/pages/system/systeminfo/express/express-list'], resolve)
    },
    {
      path: '/system/systeminfo/express/edit',
      name: 'express-edit',
      meta: {
        menu: 'systeminfo|express-edit'
      },
      component: resolve => require(['@/pages/system/systeminfo/express/express-edit'], resolve)
    }
  ]
}
export default systeminfoRoute

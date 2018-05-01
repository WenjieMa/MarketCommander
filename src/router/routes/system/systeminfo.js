const systeminfoRoute = {
  path: '/system/systeminfo',
  name: 'system-systeminfo',
  component: resolve => require(['@/pages/system/systeminfo/systeminfo'], resolve),
  children: [
    {
      path: '/system/systeminfo/district/district-list',
      name: 'district-list',
      meta: {
        menu: 'systeminfo|district-list',
        name: '省市列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/systeminfo/district/district-list'], resolve)
    },
    {
      path: '/system/systeminfo/district/district-edit',
      name: 'district-edit',
      meta: {
        menu: 'systeminfo|district-list',
        name: '市录入',
        index: 3
      },
      component: resolve => require(['@/pages/system/systeminfo/district/district-edit'], resolve)
    },
    {
      path: '/system/systeminfo/express/express-list',
      name: 'express-list',
      meta: {
        menu: 'systeminfo|express-list',
        name: '物流公司列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/systeminfo/express/express-list'], resolve)
    },
    {
      path: '/system/systeminfo/express/express-edit',
      name: 'express-edit',
      meta: {
        menu: 'systeminfo|express-list',
        name: '物流公司录入',
        index: 3
      },
      component: resolve => require(['@/pages/system/systeminfo/express/express-edit'], resolve)
    },
    {
      path: '/system/systeminfo/express/express-detail',
      name: 'express-detail',
      meta: {
        menu: 'systeminfo|express-list',
        name: '物流公司详情',
        index: 3
      },
      component: resolve => require(['@/pages/system/systeminfo/express/express-detail'], resolve)
    }
  ]
}
export default systeminfoRoute

const personinfoRoute = {
  path: '/user/personinfo',
  name: 'personinfo',
  component: resolve => require(['@/pages/user/personinfo/personinfo'], resolve),
  children: [{
      path: '/user/personinfo/info',
      name: 'personinfo-info',
      meta: {
        menu: 'personinfo|personinfo-info',
        name: '商品列表',
        index: 2
      },
      component: resolve => require(['@/pages/user/personinfo/info'], resolve)
    },
    {
      path: '/user/personinfo/collection',
      name: 'personinfo-collection',
      meta: {
        menu: 'personinfo|personinfo-info',
        name: '商品详情',
        index: 2
      },
      component: resolve => require(['@/pages/user/personinfo/collection'], resolve)
    },
    {
      path: '/user/personinfo/order-list',
      name: 'personinfo-order-list',
      meta: {
        menu: 'personinfo|personinfo-info',
        name: '商品详情',
        index: 2
      },
      component: resolve => require(['@/pages/user/shopcart/order/order-list'], resolve)
    },
    {
      path: '/user/info-update',
      name: 'info-update',
      meta: {
        menu: 'personinfo|personinfo-info',
        name: '个人信息修改',
        index: 2
      },
      component: resolve => require(['@/pages/user/personinfo/info-update'], resolve)
    }
  ]
}
export default personinfoRoute

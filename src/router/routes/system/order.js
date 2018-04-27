const orderRoute = {
  path: '/system/order',
  name: 'system-order',
  component: resolve => require(['@/pages/system/order/order'], resolve),
  children: [{
      path: '/system/order/list',
      name: 'order-list',
      meta: {
        menu: 'order|order-list'
      },
      component: resolve => require(['@/pages/system/order/order-list'], resolve)
    },
    {
      path: '/system/order/refund',
      name: 'order-refund',
      meta: {
        menu: 'order|order-refund'
      },
      component: resolve => require(['@/pages/system/order/order-refund'], resolve)
    }
  ]
}
export default orderRoute

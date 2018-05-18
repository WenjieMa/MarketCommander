const shopcartRoute = {
  path: '/user/shopcart',
  name: 'shopcart',
  component: resolve => require(['@/pages/user/shopcart/shopcart'], resolve),
  children: [{
      path: '/user/shopcart/cart',
      name: 'shopcart-cart',
      meta: {
        menu: 'shopcart|shopcart',
        name: '商品列表',
        index: 2
      },
      component: resolve => require(['@/pages/user/shopcart/cart'], resolve)
    },
    {
      path: '/user/shopcart/order-pay-success',
      name: 'shopcart-order-pay-success',
      meta: {
        menu: 'shopcart|shopcart',
        name: '商品详情',
        index: 2
      },
      component: resolve => require(['@/pages/user/shopcart/order/order-pay-success'], resolve)
    }, {
      path: '/user/shopcart/order-pay',
      name: 'shopcart-order-pay',
      meta: {
        menu: 'shopcart|shopcart',
        name: '商品详情',
        index: 2
      },
      component: resolve => require(['@/pages/user/shopcart/order/order-pay'], resolve)
    }, {
      path: '/user/shopcart/order-submit',
      name: 'shopcart-order-submit',
      meta: {
        menu: 'shopcart|shopcart',
        name: '商品详情',
        index: 2
      },
      component: resolve => require(['@/pages/user/shopcart/order/order-submit'], resolve)
    }
  ]
}
export default shopcartRoute

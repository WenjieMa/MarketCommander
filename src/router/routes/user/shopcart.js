const shopcartRoute = {
  path: '/user/shopcart',
  name: 'shopcart',
  component: resolve => require(['@/pages/user/shopcart/shopcart'], resolve),
  children: [{
      path: '/user/shopcart/cart',
      name: 'shopcart-cart',
      meta: {
        menu: 'shopcart|shopcart',
        name: '购物车',
        index: 2
      },
      component: resolve => require(['@/pages/user/shopcart/cart'], resolve)
    },
    {
      path: '/user/shopcart/order/list',
      name: 'shopcart-order-list',
      meta: {
        menu: 'shopcart|shopcart',
        name: '商品详情',
        index: 2
      },
      component: resolve => require(['@/pages/user/shopcart/order/order-list'], resolve)
    },
    {
      path: '/user/goods/comment',
      name: 'goods-comment',
      meta: {
        menu: 'shopcart|shopcart',
        name: '商品详情',
        index: 2
      },
      component: resolve => require(['@/pages/user/home/goods/comment'], resolve)
    }
  ]
}
export default shopcartRoute

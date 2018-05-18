const goodsRoute = [{
    path: '/user/homepage',
    name: 'user-homepage',
    meta: {
      menu: 'home|user-market',
      name: '首页',
      index: 1
    },
    component: resolve => require(['@/pages/user/home/homepage'], resolve)
  }, {
    path: '/user/goods/list',
    name: 'goods-list',
    meta: {
      menu: 'goods|user-market',
      name: '商品列表',
      index: 2
    },
    component: resolve => require(['@/pages/user/home/goods/goods-list'], resolve)
  },
  {
    path: '/user/goods/goods-single',
    name: 'goods-single',
    meta: {
      menu: 'goods|user-market',
      name: '商品详情',
      index: 3
    },
    component: resolve => require(['@/pages/user/home/goods/single-goods'], resolve)
  }
]

export default goodsRoute

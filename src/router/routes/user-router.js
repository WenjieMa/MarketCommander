import goodsRoute from './user/goods';
import shopcartRoute from './user/shopcart';
import personinfoRoute from './user/personinfo';

const userRouter = {
  path: '/user/home',
  name: 'user-home',
  component: resolve => require(['@/pages/user/home'], resolve),
  children: [
    shopcartRoute,
    personinfoRoute,
    {
      path: '/user/market',
      name: 'user-market',
      meta: {
        menu: 'home|user-market',
        name: '首页',
        index: 1
      },
      component: resolve => require(['@/pages/user/home/market'], resolve),
      children: goodsRoute
    }
  ]
}

export default userRouter

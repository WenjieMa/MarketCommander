// import operatorRoute from './user/operator';

const userRouter = {
  path: '/user/home',
  name: 'user-home',
  component: resolve => require(['@/pages/user/home'], resolve),
  children: [
    {
      path: '/user/homepage',
      name: 'user-homepage',
      meta: {
        menu: 'home|homepage',
        name: '首页',
        index: 1
      },
      component: resolve => require(['@/pages/user/home/homepage'], resolve)
    },
    {
      path: '/user/info-update',
      name: 'info-update',
      meta: {
        menu: 'info-update',
        name: '个人信息修改',
        index: 2
      },
      component: resolve => require(['@/pages/user/basic/info-update'], resolve)
    }
  ]
}

export default userRouter

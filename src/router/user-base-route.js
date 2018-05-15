
import userRouter from './routes/user-router';

const userBaseRoute = {
  path: '/user',
  name: 'user',
  component: resolve => require(['@/pages/user'], resolve),
  children: [{
      path: '/user/login',
      name: 'user-login',
      component: resolve => require(['@/pages/user/basic/login'], resolve)
    },
    {
      path: '/user/regist',
      name: 'user-regist',
      component: resolve => require(['@/pages/user/basic/regist'], resolve)
    },
    {
      path: '/user/forget-psw',
      name: 'user-forget-psw',
      component: resolve => require(['@/pages/user/basic/forget-psw'], resolve)
    },
    userRouter
  ]
}
export default userBaseRoute

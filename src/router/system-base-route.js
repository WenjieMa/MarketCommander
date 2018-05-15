
import systemRouter from './routes/system-router';

const systemBaseRoute = {
  path: '/system',
  name: 'system',
  component: resolve => require(['@/pages/system'], resolve),
  children: [{
      path: '/system/login',
      name: 'system-login',
      component: resolve => require(['@/pages/system/basic/login'], resolve)
    },
    {
      path: '/system/regist',
      name: 'system-regist',
      component: resolve => require(['@/pages/system/basic/regist'], resolve)
    },
    {
      path: '/system/forget-psw',
      name: 'system-forget-psw',
      component: resolve => require(['@/pages/system/basic/forget-psw'], resolve)
    },
    systemRouter
  ]
}
export default systemBaseRoute

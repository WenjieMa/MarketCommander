
import mainPageRoute from './system/main-page';
import communicationRoute from './system/communication';
import itemRoute from './system/item';
import orderRoute from './system/order';
import assistantRoute from './system/assistant';
import operatorRoute from './system/operator';

const systemRouter = {
  path: '/system/base',
  name: 'system-base',
  component: resolve => require(['@/pages/system/base'], resolve),
  children: [
    mainPageRoute,
    communicationRoute,
    itemRoute,
    orderRoute,
    assistantRoute,
    operatorRoute,
    {
      path: '/system/homepage',
      name: 'system-homepage',
      meta: {
        menu: 'home|system-homepage',
        name: '总览',
        index: 1
      },
      component: resolve => require(['@/pages/system/home/homepage'], resolve)
    },
    {
      path: '/system/el-template',
      name: 'el-template',
      meta: {
        menu: 'home|el-template',
        name: '模块',
        index: 2
      },
      component: resolve => require(['@/pages/system/home/el-template'], resolve)
    },
    {
      path: '/system/info-update',
      name: 'info-update',
      meta: {
        menu: 'info-update',
        name: '个人信息修改',
        index: 2
      },
      component: resolve => require(['@/pages/system/basic/info-update'], resolve)
    }
  ]
}

export default systemRouter

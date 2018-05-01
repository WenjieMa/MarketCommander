import Vue from 'vue'
import Router from 'vue-router'
// import qs from 'qs';
import mainPageRoute from './routes/system/main-page';
import communicationRoute from './routes/system/communication';
import systeminfoRoute from './routes/system/systeminfo';
import itemRoute from './routes/system/item';
import orderRoute from './routes/system/order';
import assistantRoute from './routes/system/assistant';
import operatorRoute from './routes/system/operator';

import store from '@/app-store/vuex';

Vue.use(Router)

const userrouter = {
  path: '/user/home',
  name: 'user-home',
  component: resolve => require(['@/pages/user/home'], resolve)
}

const systemrouter = {
  path: '/system/base',
  name: 'system-base',
  component: resolve => require(['@/pages/system/base'], resolve),
  children: [
    mainPageRoute,
    communicationRoute,
    systeminfoRoute,
    itemRoute,
    orderRoute,
    assistantRoute,
    operatorRoute,
    {
      path: '/system/homepage',
      name: 'homepage',
      meta: {
        menu: 'home|homepage',
        name: '首页',
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

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/system/login'
    }, {
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
        userrouter
      ]
    },
    {
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
        systemrouter
      ]
    },
    {
      path: '*',
      component: resolve => require(['@/pages/not-found'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  var isBase = true;
  if (to.path !== '/system/login' && to.path !== '/system/regist' && to.path !== '/system/forget-psw' && to.path !== '/user/login' && to.path !== '/user/regist' && to.path !== '/user/forget-psw') {
    isBase = false;
  }
  if (!isBase) {
    if (to.meta.ischecked) {
      store.dispatch('selectMenu', from.meta.menu || 'null|null');
    } else {
      store.dispatch('selectMenu', to.meta.menu || 'null|null');
    }

    // console.log('系统nav:' + store.state.menu.nav + '系统side:' + store.state.menu.side);

    // 路由的面包屑导航管理
    if (to.meta.index != undefined) {
      var routeList = store.state.routeList || [];
      routeList.splice(to.meta.index - 1, routeList.length - to.meta.index + 1);
      routeList.push({
        name: to.meta.name,
        path: to.path,
        inedx: to.meta.index
      });
      store.dispatch('changeRoute', routeList);
      if (to.meta.index == 1) {
        store.state.activeIndex = to.path;
      }
      // console.log('routeList:' + qs.stringify(routeList) + '|store的routeList:' + qs.stringify(store.state.routeList));
    }
    // 面包屑管理end
  }
  next();

  // 未登录状态下随意浏览跳转至登录,后台未做所以暂时注释
  // const isLogin = store.state.user.correct; // true用户已登录， false用户未登录
  // if (!isLogin && to.path !== '/system/login' && to.path !== '/system/regist' && to.path !== '/system/forget-psw' && to.path !== '/user/login' && to.path !== '/user/regist' && to.path !== '/user/forget-psw') {
  //   return next({
  //     name: 'system-login'
  //   });
  // } else {
  //   next();
  // }
  next();
})

router.afterEach((to, from) => {})

export default router

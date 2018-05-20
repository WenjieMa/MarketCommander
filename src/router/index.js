import Vue from 'vue'
import Router from 'vue-router'
// import qs from 'qs';
import store from '@/app/vuex';
import systemBaseRoute from './system-base-route';
import userBaseRoute from './user-base-route';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    systemBaseRoute,
    userBaseRoute,
    {
      path: '/1',
      redirect: '/system/login'
    },
    {
      path: '/2',
      redirect: '/user/login'
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

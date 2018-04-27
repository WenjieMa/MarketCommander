const mainPageRoute = {
    path: '/system/main-page',
    name: 'system-main-page',
    component: resolve => require(['@/pages/system/main-page/main-page'], resolve),
    children: [{
        path: '/system/main-page/hot-search',
        name: 'system-hot-search',
        meta: {
          menu: 'main-page|hot-search'
        },
        component: resolve => require(['@/pages/system/main-page/hot-search'], resolve)
      },
      {
        path: '/system/main-page/start-images',
        name: 'system-start-images',
        meta: {
          menu: 'main-page|start-images'
        },
        component: resolve => require(['@/pages/system/main-page/start-images'], resolve)
      },
      {
        path: '/system/main-page/announcement-list',
        name: 'system-announcement-list',
        meta: {
          menu: 'main-page|announcement-list'
        },
        component: resolve => require(['@/pages/system/main-page/announcement/announcement-list'], resolve)
      },
      {
        path: '/system/main-page/start-columns',
        name: 'system-start-columns',
        meta: {
          menu: 'main-page|start-columns'
        },
        component: resolve => require(['@/pages/system/main-page/start-columns/start-columns-list'], resolve)
      }
    ]
  }

  export default mainPageRoute

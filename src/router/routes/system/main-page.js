const mainPageRoute = {
    path: '/system/main-page',
    name: 'system-main-page',
    component: resolve => require(['@/pages/system/main-page/main-page'], resolve),
    children: [{
        path: '/system/main-page/hot-search',
        name: 'hot-search',
        meta: {
          menu: 'main-page|hot-search',
          name: '热词设置',
          index: 2
        },
        component: resolve => require(['@/pages/system/main-page/hot-search'], resolve)
      },
      {
        path: '/system/main-page/start-images-list',
        name: 'start-images-list',
        meta: {
          menu: 'main-page|start-images-list',
          name: '轮播图片',
          index: 2
        },
        component: resolve => require(['@/pages/system/main-page/start-images/start-images-list'], resolve)
      },
      {
        path: '/system/main-page/start-images-edit',
        name: 'start-images-edit',
        meta: {
          menu: 'main-page|start-images-list',
          name: '新增轮播图片',
          index: 3
        },
        component: resolve => require(['@/pages/system/main-page/start-images/start-images-edit'], resolve)
      },
      {
        path: '/system/main-page/announcement-list',
        name: 'announcement-list',
        meta: {
          menu: 'main-page|announcement-list',
          name: '公告信息',
          index: 2
        },
        component: resolve => require(['@/pages/system/main-page/announcement/announcement-list'], resolve)
      },
      {
        path: '/system/main-page/start-columns',
        name: 'start-columns',
        meta: {
          menu: 'main-page|start-columns',
          name: '栏目设置',
          index: 2
        },
        component: resolve => require(['@/pages/system/main-page/start-columns/start-columns-list'], resolve)
      },
      {
        path: '/system/main-page/start-columns-detail',
        name: 'start-columns-detail',
        meta: {
          menu: 'main-page|start-columns',
          name: '二级栏目设置',
          index: 3
        },
        component: resolve => require(['@/pages/system/main-page/start-columns/start-columns-detail'], resolve)
      }
    ]
  }

  export default mainPageRoute

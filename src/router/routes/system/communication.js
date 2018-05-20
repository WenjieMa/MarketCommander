const communicationRoute = {
  path: '/system/communication',
  name: 'system-communication',
  component: resolve => require(['@/pages/system/communication/communication'], resolve),
  children: [
    {
      path: '/system/communication/comment-list',
      name: 'system-comment-list',
      meta: {
        menu: 'communication|system-comment-list',
        name: '评论列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/communication/comment/comment-list'], resolve)
    },
    {
      path: '/system/communication/comment-detail',
      name: 'system-comment-detail',
      meta: {
        menu: 'communication|system-comment-list',
        name: '评论详情',
        index: 3
      },
      component: resolve => require(['@/pages/system/communication/comment/comment-detail'], resolve)
    }
  ]
}
export default communicationRoute

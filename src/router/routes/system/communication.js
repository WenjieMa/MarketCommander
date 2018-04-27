const communicationRoute = {
  path: '/system/communication',
  name: 'system-communication',
  component: resolve => require(['@/pages/system/communication/communication'], resolve),
  children: [{
      path: '/system/communication/chat',
      name: 'system-chat',
      meta: {
        menu: 'communication|system-chat',
        name: '留言回复',
        index: 2
      },
      component: resolve => require(['@/pages/system/communication/chat'], resolve)
    },
    {
      path: '/system/communication/comment-reply',
      name: 'system-comment-reply',
      meta: {
        menu: 'communication|system-comment-reply',
        name: '评论回复',
        index: 2
      },
      component: resolve => require(['@/pages/system/communication/comment-reply'], resolve)
    }
  ]
}
export default communicationRoute

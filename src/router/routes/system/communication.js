const communicationRoute = {
  path: '/system/communication',
  name: 'system-communication',
  component: resolve => require(['@/pages/system/communication/communication'], resolve),
  children: [{
      path: '/system/communication/chat',
      name: 'system-chat',
      meta: {
        menu: 'communication|system-chat'
      },
      component: resolve => require(['@/pages/system/communication/chat'], resolve)
    },
    {
      path: '/system/communication/comment-reply',
      name: 'system-comment-reply',
      meta: {
        menu: 'communication|system-comment-reply'
      },
      component: resolve => require(['@/pages/system/communication/comment-reply'], resolve)
    }
  ]
}
export default communicationRoute

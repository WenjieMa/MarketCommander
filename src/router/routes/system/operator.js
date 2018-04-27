const operatorRoute = {
  path: '/system/operator',
  name: 'operator',
  component: resolve => require(['@/pages/system/operator/operator'], resolve),
  children: [{
    path: '/system/operator/list',
    name: 'assistant-list',
    meta: {
      menu: 'operator|assistant-list',
      name: '管理员列表',
      index: 2
    },
    component: resolve => require(['@/pages/system/operator/assistant-list'], resolve)
  }, {
    path: '/system/operator/edit',
    name: 'assistant-edit',
    meta: {
      menu: 'operator|assistant-edit',
      name: '编辑管理员',
      index: 2
    },
    component: resolve => require(['@/pages/system/operator/assistant-edit'], resolve)
  }]
}
export default operatorRoute

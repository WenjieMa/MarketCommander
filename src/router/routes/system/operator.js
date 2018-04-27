const operatorRoute = {
  path: '/system/operator',
  name: 'operator',
  component: resolve => require(['@/pages/system/operator/operator'], resolve),
  children: [{
    path: '/system/operator/list',
    name: 'operator-assistant-list',
    meta: {
      menu: 'operator|list'
    },
    component: resolve => require(['@/pages/system/operator/assistant-list'], resolve)
  }, {
    path: '/system/operator/edit',
    name: 'operator-assistant-edit',
    meta: {
      menu: 'operator|edit'
    },
    component: resolve => require(['@/pages/system/operator/assistant-edit'], resolve)
  }]
}
export default operatorRoute

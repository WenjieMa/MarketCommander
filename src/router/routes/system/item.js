const itemRoute = {
  path: '/system/item',
  name: 'system-item',
  component: resolve => require(['@/pages/system/item/item'], resolve),
  children: [{
      path: '/system/item/list',
      name: 'item-list',
      meta: {
        menu: 'item|item-list'
      },
      component: resolve => require(['@/pages/system/item/item-list'], resolve)
    },
    {
      path: '/system/item/edit',
      name: 'item-edit',
      meta: {
        menu: 'item|item-edit'
      },
      component: resolve => require(['@/pages/system/item/item-edit'], resolve)
    },
    {
      path: '/system/item/import',
      name: 'item-import',
      meta: {
        menu: 'item|item-import'
      },
      component: resolve => require(['@/pages/system/item/import/item-import-infolist'], resolve)
    },
    {
      path: '/system/item/itemtype',
      name: 'item-itemtype',
      meta: {
        menu: 'item|item-itemtype'
      },
      component: resolve => require(['@/pages/system/item/itemtype/itemtype-list'], resolve)
    }
  ]
}
export default itemRoute
